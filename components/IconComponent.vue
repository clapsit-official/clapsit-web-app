<template>
  <div 
    ref="custom-icon" 
    @mouseenter="() => hoverToggle = true" 
    @mouseleave="() => hoverToggle = false" 
    :class="{'cursor-effect': hover}"
    class="icon-container flex-column-center" />
</template>
<script lang="ts">
import iconsList, { type IconsTypes } from "~/assets/icons/materialIconsList";
import { stringToElement } from '#imports';
import colorUtilities from "~/constants/colorUtilities.js";

let optionsCanBeSelected = Object.keys(iconsList)

export default defineComponent({
  name: "IconComponent",
  props: {
    iconName: {
      type: String as () => IconsTypes,
      validator: function (value: string) { return optionsCanBeSelected.includes(value) },
      required: true
    },
    fill: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    iconSize: {
      type: [String, Number],
      default: () => '1.5rem',
    },
    color: {
      type: String,
      default: () => colorUtilities.$blackColor
    },
    hover: {
      type: Boolean,
      default: () => false
    }
  },
  setup() {
    const { $colorUtilities } = useNuxtApp();
    return {
      colorUtilities: $colorUtilities
    }
  },
  computed: {
    iconComputed() {
      if (this.iconName) {
        if (this.iconsList[this.iconName]) {
          return this.iconsList[this.iconName][this.fillComputed ? 'fill' : 'simple'];
        }
      }
      return null;
    },
    fillComputed() {
      if(this.hover) {
        if(this.hoverToggle) {
          return !this.fill
        }
      }
      return this.fill;
    }
  },
  data() {
    return {
      iconsList,
      hoverToggle: false,
    }
  },
  mounted() {
    this.getStyledByProps();
  },
  methods: {
    stringToElement,
    getStyledByProps() {
      let parent: any = this.$refs['custom-icon'];
      if (this.iconComputed) {
        let icon: any = this.stringToElement(this.iconComputed);
        if (icon) {
          icon.style.width = this.iconSize;
          icon.style.height = this.iconSize;
          icon.style.color = this.color;
        }
        if (parent.children.length) {
          parent.removeChild(parent.firstChild);
        }
        parent.appendChild(icon);
      } else {
        if (parent.children.length) {
          parent.removeChild(parent.firstChild);
        }
      }
    }
  },
  watch: {
    fillComputed(val, oldVal) {
      if (val !== oldVal) this.getStyledByProps();
    },
    color(val, oldVal) {
      if (val !== oldVal) this.getStyledByProps();
    },
    iconSize(val, oldVal) {
      if (val !== oldVal) this.getStyledByProps();
    },
    iconName(val, oldVal) {
      if (val !== oldVal) this.getStyledByProps();
    },
  }
});
</script>
<style scoped lang="scss">
.icon-container {
  width: 100%;
  height: 100%;
}
.cursor-effect {
  cursor: pointer !important;
}
</style>