import { Percent, Pixel } from "../helpers/default.js";
import { getRandomBetween } from "../helpers/advanced.js";
import soundEffects from "../helpers/soundEffects.js";

class Star {
  starColors = [
    "#9bb0ff",
    "#aabfff",
    "#cad7ff",
    "#f8f7ff",
    "#fff4ea",
    "#ffd2a1",
    "#ffcc6f",
    "#49d6ff",
  ];

  constructor(
    coordinates = { x: 0, y: 0 },
    starSize = null,
    movmentSpeed = 100
  ) {
    this.coordinates = coordinates;
    if (!starSize) {
      this.starSize = this.getRandomStarSize();
    } else {
      this.starSize = starSize;
    }

    this.element = document.createElement("div");
    this.element.id = `star-x${this.coordinates.x}-y${this.coordinates.y}`;
    this.element.title = `x: ${this.coordinates.x} - y: ${this.coordinates.y}`;
    this.movmentSpeed = movmentSpeed;
    this.targetStarColor =
      this.starColors[getRandomBetween(0, this.starColors.length - 1)];
    this.element.style.background = this.targetStarColor;
    this.element.style.position = "absolute";
    //this.element.style.transitionTimingFunction = 'linear'
    this.element.style.opacity = Percent(getRandomBetween(30, 100));
    this.element.style.borderRadius = Percent(100);
    this.setSize(this.starSize);
    this.setPosition(coordinates);
    this.setBrightness(this.starSize/2);
    this.setMovmentSpeed(this.movmentSpeed);
  }

  getRandomStarSize = () => getRandomBetween(1, 4);

  setPosition(coordinates = { x: 0, y: 0 }) {
    this.coordinates = coordinates;
    this.element.style.bottom = Pixel(coordinates.y);
    this.element.style.left = Pixel(coordinates.x);

    this.element.id = `star-x${this.coordinates.x}-y${this.coordinates.y}`;
    this.element.title = `x: ${this.coordinates.x} - y: ${this.coordinates.y}`;
  }

  setMovmentSpeed(movmentSpeed = 100) {
    this.movmentSpeed = movmentSpeed;
    this.element.style.transitionDuration = `${(movmentSpeed/100)}s`;
    this.element.style.transitionTimingFunction = 'linear'
  }

  setSize(size = 10) {
    this.starSize = size;
    this.element.style.width = Pixel(this.starSize);
    this.element.style.height = Pixel(this.starSize);
  }
  setColor(color = 'random') {
    if (color === "random") {
      this.targetStarColor =
      this.starColors[getRandomBetween(0, this.starColors.length - 1)];
      this.element.style.background = this.targetStarColor;
      this.setBrightness(this.starSize/2);
    } else {
      this.targetStarColor = color;
      this.element.style.background = this.targetStarColor;
      this.setBrightness(this.starSize/2);
    }
  }

  setBrightness(volume=1, color) {
    this.element.style.boxShadow = `0px 0px ${Pixel(volume*5)} ${Pixel(volume)} ${color ? color : this.targetStarColor}`;
  }

  async soundEffect() {
    return await soundEffects('4');
  }

}

export default Star;
