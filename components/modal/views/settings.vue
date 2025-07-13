<script lang="ts">
import { availableLocales } from '~/assets/locales';
import type { LangOptionsType } from '~/constants/types/LocalesType';

export default defineComponent({
  name: "SettingsModalComponent",
  computed: {
    currentTheme() {
      return useColorMode();
    },
    currentLang() {
      return window?.localStorage?.getItem('lang');
    },
    langs() {
      return availableLocales
    }
  },
  data() {
    return {
      themes: [
        {
          icon: "moon",
          value: "dark",
        },
        {
          icon: "sun",
          value: "light",
        },
        {
          text: "AUTO",
          value: "system",
        },
      ]
    };
  },
  methods: {
    setTheme(value: string) {
      this.currentTheme.preference = value;
    },
    setLang(value: LangOptionsType) {
      useI18nStore().setAppLang(value)
    }
  },
});
</script>
<template>
  <div id="settings_component" style="width: 100%">
    <secton class="settings-item" :key="currentTheme.preference">
      <div class="header__settings-item flex-row-start-center">
        <div class="icon-area">
          <icon-component icon-name="grid" icon-size="19px" />
        </div>
        <Text locale="Theme" />
      </div>
      <span class="divider"></span>
      <div class="theme-options__settings-item">
        <button
          v-for="item in themes"
          @click="setTheme(item.value)"
          class="option__theme-options ghost bordered"
          :class="{
            selected: currentTheme.preference === item.value,
          }"
        >
          <icon-component v-if="item.icon" :icon-name="item.icon" hover />
          <span v-if="item.text"> {{ item.text }}</span>
        </button>
      </div>
    </secton>
    <secton class="settings-item">
      <div class="header__settings-item flex-row-start-center">
        <div class="icon-area">
          <icon-component icon-name="translate" icon-size="19px" />
        </div>
        <Text locale="Language" /> : {{ currentLang }}
      </div>
      <span class="divider"></span>
      <div class="theme-options__settings-item">
        <button
          v-for="item in langs"
          @click="setLang(item.iso)"
          class="option__theme-options ghost bordered"
          :class="{
            selected: currentLang === item.iso,
          }">
          <span> {{ item.label.toUpperCase() }}</span>
        </button>
      </div>
    </secton>
  </div>
</template>
<style lang="scss">
#settings_component {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .settings-item {
    .header__settings-item {
      gap: 5px;
    }
    .theme-options__settings-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .option__theme-options {
        height: 5rem;
        width: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        color: colors.$textPrimary;
        &.selected,
        &:hover {
          background-color: colors.$textPrimary;
          & * {
            color: colors.$backgroundColor;
            fill: colors.$backgroundColor;
          }
        }
      }
    }
  }
}
</style>
