import { Percent, Pixel } from "../helpers/default.js";
import { getRandomBetween } from "../helpers/advanced.js";

class SkyItems {
  constructor(skyItemsColor = "transparent", size = {width: Percent(100), height: Percent(100)}) {
    this.skyItemsColor = skyItemsColor;
    this.size = size;

    this.skyItems = document.createElement("div");
    this.skyItems.style.background = skyItemsColor;
    this.skyItems.style.width = size.width;
    this.skyItems.style.height = size.height;
    this.skyItems.style.position = 'relative';
    this.skyItems.id = `sky-items-${getRandomBetween(100000000, 999999999)}`;
  }

  get() {
    return this.skyItems;
  }
}

export default SkyItems