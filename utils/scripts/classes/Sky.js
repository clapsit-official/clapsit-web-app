import { Percent, Pixel } from "../helpers/default.js";
import { getRandomBetween } from "../helpers/advanced.js";

class Sky {
  constructor(
    skyColor = "#000001",
    size = { width: Percent(100), height: Percent(100) }
  ) {
    this.skyColor = skyColor;
    this.size = size;

    this.sky = document.createElement("div");
    this.sky.style.background = skyColor;
    this.sky.style.width = size.width;
    this.sky.style.height = size.height;
    this.sky.id = `sky-${getRandomBetween(100000000, 999999999)}`;
    this.skyLimits = {
        width: this.sky.clientWidth,
        height: this.sky.clientHeight
    }
  }

  get() {
    return this.sky;
  }
}

export default Sky;
