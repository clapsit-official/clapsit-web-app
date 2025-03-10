<template>
  <div ref="custom-icon" class="icon-container flex-column-center"/>
</template>
<script lang="ts">
import iconsList, {type IconsTypes} from "~/assets/icons/materialIconsList";
import { stringToElement  } from '#imports';
import colorUtilities from "~/constants/colorUtilities.js";

let optionsCanBeSelected = Object.keys(iconsList)

export default defineComponent({
  name: "IconComponent",
  props: {
    iconName: {
      type: String as () => IconsTypes,
      validator: function(value: string) { return optionsCanBeSelected.includes(value) },
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
      default: () => '40px',
    },
    color:  {
      type: String,
      default: () => colorUtilities.$blackColor
    },
  },
  setup(){
    const { $colorUtilities } = useNuxtApp();
    return {
      colorUtilities: $colorUtilities
    }
  },
  computed: {
    iconComputed() {
      if (this.iconName) {
        if (this.iconsList[this.iconName]) {
          return this.iconsList[this.iconName][this.fill ? 'fill' : 'simple'];
        }
      }
      return null;
    }
  },
  data() {
    return {
      iconsList,
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
          icon.style.fill = this.color;
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
    fill(val, oldVal)
    {
      if (val !== oldVal) this.getStyledByProps();
    },
    color(val, oldVal)
    {
      if (val !== oldVal) this.getStyledByProps();
    },
    iconSize(val, oldVal)
    {
      if (val !== oldVal) this.getStyledByProps();
    },
    iconName(val, oldVal)
    {
      if (val !== oldVal) this.getStyledByProps();
    },
  }
});
</script>
<style scoped lang="scss">
.icon-container{
  width: 100%;
  height: 100%;
}
</style>