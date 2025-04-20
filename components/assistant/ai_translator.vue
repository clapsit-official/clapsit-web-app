<script lang="ts">
import { $availableRoutes } from "~/configs/routes.config";
import colorUtilities from "~/constants/colorUtilities";
export default defineComponent({
  name: "AITranslator",
  setup() {
    return {
      $availableRoutes,
      colorUtilities,
      store: useAITranslator(),
      $t: useI18nStore().i18n.global.t,
    };
  },
  data() {
    return {
      count: 0,
      copyToggle: false,
      example: null,
      debounceTimeout: null as any, // To store the timeout ID for debouncing
    };
  },
  props: {
    cData: {
      type: Object,
      default: () => {
        return {
          id: null,
          label: null,
          c_key: null,
          date: null,
          key_name: "ai_translator",
        };
      },
    },
  },
  computed: {
    deviceType() {
      return useCoreAppStore().getDeviceType;
    },
    isLoading() {
      return useQueryManager().loadingList.includes("ai_translator");
    },
    cKey() {
      return this.cData.c_key;
    },
    resultComputed() {
      if(this.isLoading)  {
        return {content: this.$t('assistants.ai_translator.loading'), disabled: true};
      }
      if(this.store.progress.output.result.output.result){
        return {content: this.store.progress.output.result.output.result, disabled: false};
      } 
      return {content: this.$t('assistants.ai_translator.to_lang_placeholder'), disabled: true};
    },
    inputComputed: {
      get() {
        return revertEscapeSequences(this.store.progress.input.data.input);
      },
      set(value: string) {
        this.store.progress.input.data.input = replaceEscapeSequences(value);
      },
    },
    fromLangComputed: {
      get() {
        return this.store.progress.input.data.from_lang;
      },
      set(val: string) {
        let keep;
        if(val === this.toLangComputed) {
          keep = deepCopy(this.store.progress.input.data.from_lang);
        }
        this.store.progress.input.data.from_lang = val;
        if(keep) {
          this.store.progress.input.data.to_lang = keep;
        }
      }
    },
    toLangComputed: {
      get() {
        return this.store.progress.input.data.to_lang;
      },
      set(val: string) {
        let keep;
        if(val === this.fromLangComputed) {
          keep = deepCopy(this.store.progress.input.data.to_lang);
        }
        this.store.progress.input.data.to_lang = val;
        if(keep) {
          this.store.progress.input.data.from_lang = keep;
        }
      }
    }
  },
  watch: {
    cData: {
      immediate: true,
      deep: true,
      async handler() {
        if (this.cData.c_key && this.cData.key_name) {
          useAITranslator().environments.c_key = this.cData.c_key;
          useAITranslator().environments.c_id = this.cData.id;
          useAITranslator().environments.key_name = this.cData.key_name;
        }
      },
    },
  },
  methods: {
    debounce(fn: Function, delay: number) {
      // Clear the previous timeout
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }
      this.store.resetOutputProgress();
      // Set a new timeout
      if(!this.isLoading) {
        this.debounceTimeout = setTimeout(() => {
          fn();
        }, delay);
      }
    },
    handleGenerateShortcut(event: any) {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        this.store.generate();
      }
    },
    resetInputProgress() {
      this.store.progress.input.data.input = "";
      this.store.progress.input.data.from_lang = "detect";
      this.store.resetOutputProgress();
    },
    toClipboard() {
      this.copyToggle = true;
      copyToClipboard(
        this.store.progress.output.result.output.result.toString()
      );
      setTimeout(() => {
        this.copyToggle = false;
      }, 2000);
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleGenerateShortcut);
  },
  unmounted() {
    window.removeEventListener("keydown", this.handleGenerateShortcut);
  },
});
</script>

<template>
  <form id="assistant-ai_translator" @submit.prevent="store.generate">
    <section id="input">
      <div class="tools">
        <div id="from_lang" class="select-lang">
          <custom-dropdown
            @input="debounce(store.generate, 1500)"
            icon="translate"
            :options="store.from_lang_options"
            :label="$t('assistants.ai_translator.from_lang')"
            v-model="fromLangComputed"
          />
        </div>
        <div class="btn-area">
          <div class="hover-effect">
            <icon-component icon-name="info" :title="$t('assistants.ai_translator.input_info')"/>
          </div>
          <div class="hover-effect">
            <icon-component icon-name="refresh" @click="store.reverseProgress"/>
          </div>
          <div class="hover-effect" @click="resetInputProgress">
            <icon-component icon-name="trash" />
          </div>
        </div>
      </div>
      <textarea
        @input="debounce(store.generate, 1500)"
        :placeholder="$t('assistants.ai_translator.from_lang_placeholder')"
        v-model="inputComputed"
      />
    </section>
    <section id="output">
      <div class="tools">
        <div id="to_lang" class="select-lang">
          <custom-dropdown
            @input="debounce(store.generate, 1500)"
            :label="$t('assistants.ai_translator.to_lang')"
            :options="store.to_lang_options"
            icon="translate"
            v-model="toLangComputed"
          />
        </div>
        <div class="btn-area">
          <div class="hover-effect">
            <icon-component icon-name="info" :title="$t('assistants.ai_translator.output_info')"/>
          </div>
          <div
            class="hover-effect"
            @click="toClipboard"
            :title="
              !copyToggle
                ? $t('assistants.json_generator.copy')
                : $t('assistants.json_generator.copied')
            "
          >
            <icon-component
              :fill="copyToggle"
              :icon-name="copyToggle ? 'clipboard_copied' : 'clipboard_copy'"
            />
          </div>
          <div class="hover-effect">
            <icon-component icon-name="star" />
          </div>
        </div>
      </div>
      <p v-html="resultComputed.content" :class="{'disabled': resultComputed.disabled}"/>
      <div
        class="other-results"
        v-if="store.progress.output.result.output.unique_and_rarely.length">
        <ol>
          <li
            v-for="(item, index) in store.progress.output.result.output
              .unique_and_rarely"
            :key="index"
          >
            <span class="text-1">
              {{ index + 1 }}. {{ capitalizeFirstLetter(item.word) }}
            </span>
            <span>-</span>
            <span class="text-2">
              {{ capitalizeFirstLetter(item.translate) }}
            </span>
            <div class="text-2" v-if="item.synonyms.length > 0">
              (&nbsp;<span v-for="item2 in item.synonyms" :key="item2">
                {{ capitalizeFirstLetter(item2) }}
                <span v-if="item2 !== item.synonyms[item.synonyms.length - 1]">,
                </span> </span
              >)
            </div>
          </li>
        </ol>
      </div>
    </section>
  </form>
</template>

<style lang="scss" scoped>
#assistant-ai_translator {
  display: flex;
  width: 99%;
  justify-content: space-between;
  padding: 0 1rem;
  section {
    width: calc(48% - (2rem * 2));
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1rem;
    background-color: colors.$surfaceColor;
    border-radius: 4rem;
    padding: 1.5rem 2rem;
    &:hover {
      p,
      textarea {
        overflow: auto;
      }
    }
    &#input {
      border-top-left-radius: 0 !important;
      textarea {
        height: 85%;
        color: colors.$primaryColor;
      }
    }
    &#output {
      border-top-right-radius: 0 !important;
      p {
        overflow: auto;
        height: 80%;
        color: colors.$textPrimary;
        &.disabled {
          color: colors.$textSecondary;
          opacity: 0.5;
        }
      }
    }
    p,
    textarea {
      width: 99%;
      padding: 0 0.3rem;
      border-radius: 0.5rem;
      background-color: transparent;
      border: none;
      resize: none;
      font-size: 0.95rem;
      font-weight: 500;
      &:focus {
        outline: none;
      }
    }
    .other-results {
      background-color: colors.$surfaceColor2;
      border-radius: 0.5rem;
      width: 100%;
      padding: 1rem 0;
      ol {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
          display: flex;
          gap: 0.6rem;
          position: relative;
          left: 1rem;
          font-size: 0.8rem;
          span.text-1 {
            font-weight: 500;
            color: colors.$textPrimary;
          }
          div.text-2 {
            font-style: italic;
          }
        }
      }
    }
    .tools {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn-area {
        display: flex;
        gap: 1.5rem;
        & > div {
          position: relative;
          top: 5px;
          padding: 0;
        }
      }
    }
  }
}
.tablet-app-container {
  #assistant-ai_translator {
    flex-direction: column !important;
    gap: 2rem;
    section {
      width: 95% !important;
    }
  }
}
</style>
