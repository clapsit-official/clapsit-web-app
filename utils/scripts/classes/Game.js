import {
  calculateDistance,
  getRandomBetween,
  getUrlParams,
} from "../helpers/advanced.js";
import { Percent, Pixel } from "../helpers/default.js";
import setLayoutsOrder from "../helpers/setLayoutsOrder.js";
import soundEffects from "../helpers/soundEffects.js";
import Sky from "./Sky.js";
import SkyItems from "./SkyItem.js";
import Star from "./Star.js";

const default_layouts = {
  backgroundLayout1() {    
    const { sky } = new Sky();
    const { skyItems } = new SkyItems();
    console.log('salam1');
    setTimeout((e) => {
      console.log('salam2');
      skyItems.innerHTML = null;
      const starCount = ((sky.clientWidth * sky.clientHeight) / 3500).toFixed(0);
      const createdStars = [];
      const centerCoordinates = {
        x: sky.clientWidth / 2,
        y: sky.clientHeight / 2,
      };
      for (let i = 0; i < starCount; i++) {
        const starCoordinates = {
          x: getRandomBetween(0, sky.clientWidth),
          y: getRandomBetween(0, sky.clientHeight),
        };
        const star = new Star(starCoordinates);
        star.setMovmentSpeed(1000);
        skyItems.appendChild(star.element);
        createdStars.push(star);
      }

      function animation() {
        let iId;
        createdStars.forEach((target, index) => {
          const speed = (
            (Math.abs(target.coordinates.x - centerCoordinates.x) *
              Math.abs(target.coordinates.y - centerCoordinates.y)) /
            100
          ).toFixed(0);
          iId = setTimeout(() => {
            target.setPosition(centerCoordinates);
            target.setMovmentSpeed(speed);

            target.element.style.opacity = Percent(100);
            target.element.style.boxShadow = `0px 2px ${Pixel(
              target.starSize * 20
            )} ${Pixel(target.starSize / 1.5)} #900000`;
          }, getRandomBetween(1000, 15000));
        });

        const tId = setTimeout(() => {
          createdStars.forEach((target, index) => {
            target.setPosition({
              x: getRandomBetween(0, sky.clientWidth),
              y: getRandomBetween(0, sky.clientHeight),
            });
            const speed = (
              (Math.abs(target.coordinates.x - centerCoordinates.x) *
                Math.abs(target.coordinates.y - centerCoordinates.y)) /
              100
            ).toFixed(0);
            target.setMovmentSpeed(speed);
            target.element.style.opacity = Percent(getRandomBetween(1, 100));
            target.element.style.boxShadow = `0px 2px ${Pixel(
              target.starSize * 20
            )} ${Pixel(target.starSize / 1.5)} ${target.targetStarColor}`;
          });
          clearInterval(iId);
          clearTimeout(tId);
          setTimeout(animation, 20000);
        }, 25000);
      }
      animation();
    }, 0);

    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout2() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    setTimeout( (e) => {
      skyItems.innerHTML = null;
      const starCount = ((sky.clientWidth * sky.clientHeight) / 3500).toFixed(
        0
      );
      const createdStars = [];
      const centerCoordinates = {
        x: sky.clientWidth / 2,
        y: sky.clientHeight / 2,
      };

      for (let i = 0; i < starCount; i++) {
        const starCoordinates = {
          x: getRandomBetween(0, sky.clientWidth),
          y: getRandomBetween(0, sky.clientHeight),
        };
        const star = new Star(starCoordinates);
        star.setMovmentSpeed(1000);
        skyItems.appendChild(star.element);
        createdStars.push(star);
      }
      let starCenterTarget = null;
      function animation() {
        if (starCenterTarget === null) {
          const starCenter = new Star(centerCoordinates);
          starCenter.setColor("#F99090");
          starCenter.setSize(1);
          starCenter.setMovmentSpeed(1);
          skyItems.appendChild(starCenter.element);
          starCenterTarget = starCenter;
        }

        let iId;
        createdStars.forEach((target, index) => {
          const speed = calculateDistance(
            target.coordinates,
            centerCoordinates
          ).toFixed(0);
          iId = setTimeout(() => {
            starCenterTarget.setBrightness(
              (index / createdStars.length.toFixed(0)) * 100
            );
            starCenterTarget.setSize(10);
            starCenterTarget.setPosition({
              x: centerCoordinates.x - starCenterTarget.starSize / 2,
              y: centerCoordinates.y - starCenterTarget.starSize / 2,
            });

            target.setPosition(centerCoordinates);
            target.setMovmentSpeed(speed);
            target.setSize(2);
            target.element.style.opacity = Percent(100);
            target.element.style.boxShadow = `0px 2px ${Pixel(
              target.starSize * 20
            )} ${Pixel(target.starSize / 1.5)} #F09090`;
          }, getRandomBetween(1000, 15000));
        });

        const tId1 = setTimeout(() => {
          createdStars.forEach((target, index) => {
            target.setSize(9);
            starCenterTarget.setSize(0);
            starCenterTarget.setBrightness(0);
            target.setMovmentSpeed(1000);
            target.element.style.opacity = Percent(100);
            target.element.style.boxShadow = `0px 2px ${Pixel(
              target.starSize * 20
            )} ${Pixel(target.starSize / 1.5)} blue`;
          });
        }, 24000);

        const tId = setTimeout(() => {
          createdStars.forEach((target, index) => {
            target.setPosition({
              x: getRandomBetween(0, sky.clientWidth),
              y: getRandomBetween(0, sky.clientHeight),
            });
            const speed = calculateDistance(
              target.coordinates,
              centerCoordinates
            ).toFixed(0);
            target.setMovmentSpeed(speed);
            target.setSize(getRandomBetween(1, 5));
            target.element.style.opacity = Percent(getRandomBetween(1, 100));
            target.element.style.boxShadow = `0px 2px ${Pixel(
              target.starSize * 20
            )} ${Pixel(target.starSize / 1.5)} ${target.targetStarColor}`;
          });
          clearInterval(iId);
          clearTimeout(tId);
          setTimeout(animation, 25000);
        }, 25000);
      }
      animation();
    });

    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout3() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    setTimeout( (e) => {
      skyItems.innerHTML = null;
      const starCount = ((sky.clientWidth * sky.clientHeight) / 1000).toFixed(
        0
      );
      const createdStars = [];
      for (let i = 0; i < starCount; i++) {
        const starCoordinates = {
          x: getRandomBetween(0, sky.clientWidth),
          y: getRandomBetween(0, sky.clientWidth),
        };
        const star = new Star(starCoordinates);
        star.setMovmentSpeed(100);
        skyItems.appendChild(star.element);
        createdStars.push(star);
      }

      let toggle = false;
      setInterval(() => {
        toggle = !toggle;
        const starCoordinates = {
          x: getRandomBetween(0, sky.clientWidth),
          y: getRandomBetween(0, sky.clientWidth),
        };
        const target =
          createdStars[getRandomBetween(0, createdStars.length - 1)];
        console.clear();
        console.log(target);
        target.setMovmentSpeed(getRandomBetween(100, 1000));
        target.element.style.opacity = toggle
          ? 0
          : Percent(getRandomBetween(30, 100));
        target.setSize(getRandomBetween(1, 5));
        if (toggle) {
          target.setPosition(starCoordinates);
        }
      }, 5000);
    });

    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout4() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    setTimeout( (e) => {
      skyItems.innerHTML = null;
      const createdStars = [];

      let a = 1;
      const count = 35;
      for (let x = 1; x <= count; x++) {
        for (let y = 1; y <= x; y++) {
          a++;

          const star = new Star();
          star.element.style.opacity = Percent(100);

          star.setMovmentSpeed(100);
          star.setPosition({ x: x * 25, y: y * 25 });
          star.setSize(7);

          createdStars.push(star);
          skyItems.appendChild(star.element);
        }
      }
      setInterval(() => {
        const targetIndex = getRandomBetween(0, createdStars.length - 1);
        const star = createdStars[targetIndex];
        star.setColor();
      }, 1000);
    });
    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout5() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    setTimeout( (e) => {
      skyItems.innerHTML = null;
      const createdStars = [];

      let a = 1;
      const count = 35;
      for (let x = 1; x <= count; x++) {
        for (let y = 1; y <= x; y++) {
          a++;
          const star = new Star();
          star.element.style.opacity = Percent(100);
          star.setMovmentSpeed(100);
          star.setSize(5);
          star.setPosition({ x: x * 25, y: y * 25 });

          if (x % 5 === 0 || y % 5 === 0 || x === y || x === count || y === 1) {
            star.setColor();
            createdStars.push(star);
            skyItems.appendChild(star.element);
          } else {
            star.setColor("transparent");
            createdStars.push(star);
            skyItems.appendChild(star.element);
          }
        }
      }
    });
    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout6() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    setTimeout( (e) => {
      skyItems.innerHTML = null;
      const createdStars = [];

      let a = 1;
      const count = 35;
      for (let x = 1; x <= count; x++) {
        for (let y = 1; y <= x; y++) {
          a++;
          const star = new Star();
          star.element.style.opacity = Percent(100);
          star.setMovmentSpeed(100);
          star.setSize(5);
          star.setPosition({ x: x * 25, y: y * 25 });
          star.setColor();
          createdStars.push(star);
          skyItems.appendChild(star.element);
        }
      }
      let toggle = true;
      setInterval(() => {
        createdStars.forEach((star) => {
          toggle = !toggle;
          if (toggle) {
            star.setPosition({
              x: star.coordinates.x + 3,
              y: star.coordinates.y,
            });
          } else {
            star.setPosition({
              x: star.coordinates.x,
              y: star.coordinates.y + 3,
            });
          }
        });
      }, 100);
    });
    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout7() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    const animationSpeed = 50;
    const starLimit = 500;

    setTimeout( (e) => {
      skyItems.innerHTML = null;
      let toggle = 0;
      const createdStars = [];

      function animation1(id, old_star) {
        toggle++;
        if (createdStars.length === starLimit) {
          clearTimeout(id);
          return;
        }
        clearTimeout(id);

        if (old_star) {
          old_star.setColor();
          old_star.setSize(getRandomBetween(4, 6));
          old_star.setPosition({
            x: getRandomBetween(0, skyItems.clientWidth),
            y: getRandomBetween(0, skyItems.clientHeight),
          });
        }

        const star = new Star();
        star.setSize(5);
        star.setColor("white");
        star.setMovmentSpeed(animationSpeed);
        star.setPosition({
          x: skyItems.clientWidth / 2,
          y: skyItems.clientHeight / 2,
        });
        createdStars.push(star);
        skyItems.appendChild(star.element);
        const tId = setTimeout(() => {
          animation1(tId, star);
        }, animationSpeed * 10);
      }
      animation1(1);
    });
    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout8() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    const animationSpeed = 200;
    const starLimit = 500;

    setTimeout( (e) => {
      skyItems.innerHTML = null;
      let toggle = 0;
      const createdStars = [];

      function animation1(id, old_star) {
        toggle++;
        if (createdStars.length === starLimit) {
          clearTimeout(id);
          return;
        }
        clearTimeout(id);

        if (old_star) {
          old_star.setColor();
          old_star.setSize(getRandomBetween(4, 6));
          old_star.setPosition({
            x: getRandomBetween(0, skyItems.clientWidth),
            y: getRandomBetween(0, skyItems.clientHeight),
          });
          old_star.soundEffect();
        }

        const star = new Star();
        star.setSize(10);
        star.setColor("white");
        star.setMovmentSpeed(animationSpeed);
        star.setPosition({
          x: skyItems.clientWidth / 2,
          y: skyItems.clientHeight / 2,
        });
        createdStars.push(star);
        skyItems.appendChild(star.element);
        const tId = setTimeout(() => {
          animation1(tId, star);
          if (old_star) animation2(old_star);
        }, animationSpeed * 10);
      }
      animation1(1);

      function animation2(star) {
        setInterval(() => {
          star.setPosition({
            x: getRandomBetween(0, skyItems.clientWidth),
            y: getRandomBetween(0, skyItems.clientHeight),
          });
          star.setColor();
          star.setSize(getRandomBetween(1, 6));
        }, animationSpeed * 1);
      }
    });
    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout9() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    let animationSpeed = 50;
    const starLimit = 1500;

    setTimeout( (e) => {
      skyItems.innerHTML = null;
      let toggle = 0;
      const createdStars = [];

      function animation1(id, old_star) {
        toggle++;
        if (animationSpeed > 10) {
          animationSpeed--;
        } else {
          return;
        }
        if (createdStars.length === starLimit) {
          clearTimeout(id);
          return;
        }
        clearTimeout(id);

        if (old_star) {
          old_star.setColor();
          old_star.setSize(getRandomBetween(4, 6));
          old_star.setPosition({
            x: getRandomBetween(0, skyItems.clientWidth),
            y: getRandomBetween(0, skyItems.clientHeight),
          });
          old_star.soundEffect();
        }

        const star = new Star();
        star.setSize(10);
        star.setColor("white");
        star.setMovmentSpeed(animationSpeed);
        star.setPosition({
          x: skyItems.clientWidth / 2,
          y: skyItems.clientHeight / 2,
        });
        createdStars.push(star);
        skyItems.appendChild(star.element);
        const tId = setTimeout(() => {
          animation1(tId, star);
          if (old_star) animation2(old_star);
        }, animationSpeed * 10);
      }
      animation1(1);

      function animation2(star) {
        setInterval(() => {
          star.setPosition({
            x: getRandomBetween(0, skyItems.clientWidth),
            y: getRandomBetween(0, skyItems.clientHeight),
          });
          star.setColor();
          star.setSize(getRandomBetween(1, 7));
        }, animationSpeed * 10);
      }
    });
    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout10() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    const animationSpeed = 50;
    const starLimit = 300;

    setTimeout( (e) => {
      skyItems.innerHTML = null;
      const createdStars = [];

      const starCenter = new Star();
      starCenter.setSize(5);
      starCenter.setMovmentSpeed(10);
      starCenter.setColor("white");
      starCenter.setPosition({
        x: skyItems.clientWidth / 2 - 3,
        y: skyItems.clientHeight / 2 - 3,
      });
      starCenter.element.style.zIndex = 100000;
      starCenter.element.style.opacity = Percent(100);
      skyItems.appendChild(starCenter.element);

      let counter = 0;
      skyItems.addEventListener("click", (event) => {
        counter++;
        if (counter % 1 === 0) {
          starCenter.setSize(15);

          if (createdStars.length > starLimit) {
            const target = createdStars[0];
            console.log(target);
            skyItems.removeChild(target.element);
            createdStars.splice(0, 1);
          }
          const star = new Star();
          const starSize = getRandomBetween(3, 7);
          star.setSize(starSize);
          star.setMovmentSpeed(animationSpeed);
          star.setPosition({
            x: skyItems.clientWidth / 2,
            y: skyItems.clientHeight / 2,
          });
          createdStars.push(star);
          skyItems.appendChild(star.element);
          const tid = setTimeout(() => {
            star.setPosition({
              x: event.clientX - 100 - starSize + 5,
              y: skyItems.clientHeight - event.clientY + 50 - starSize,
            });
            starCenter.setSize(5);
            star.soundEffect();
            setInterval(() => {
              star.setMovmentSpeed(1000);
              //star.setPosition({x: star.coordinates.x + 5, y: star.coordinates.y + 5})
              star.setSize(star.starSize + 5);
              star.element.style.opacity = star.element.style.opacity - 0.2;
            }, 1000);
            clearTimeout(tid);
          }, animationSpeed);
        }
      });
    });
    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout11() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    const animationSpeed = 50;
    const starLimit = 300;

    setTimeout( (e) => {
      skyItems.innerHTML = null;
      const createdStars = [];

      const starCenter = new Star();
      starCenter.setSize(10);
      starCenter.setMovmentSpeed(10);
      starCenter.setColor("white");
      starCenter.setPosition({
        x: skyItems.clientWidth / 2 - 3,
        y: skyItems.clientHeight / 2 - 3,
      });
      starCenter.element.style.zIndex = 100000;
      starCenter.element.style.opacity = Percent(100);
      starCenter.setBrightness(1);
      skyItems.appendChild(starCenter.element);

      let counter = 0;
      function fire(event) {
        console.log(event);

        counter++;
        if (counter % 1 === 0) {
          if (createdStars.length > starLimit) {
            const target = createdStars[0];
            console.log(target);
            skyItems.removeChild(target.element);
            createdStars.splice(0, 1);
          }
          // Fire Start
          const star = new Star();
          const starSize = getRandomBetween(3, 7);
          starCenter.setBrightness(10, star.targetStarColor);
          star.setSize(starSize);
          const centerCoordinates = {
            x: skyItems.clientWidth / 2,
            y: skyItems.clientHeight / 2,
          };
          star.setPosition(centerCoordinates);
          createdStars.push(star);
          skyItems.appendChild(star.element);

          // Fire Achive
          const tid = setTimeout(() => {
            const targetCoordinates = {
              x: event.clientX - 100 - starSize + 5,
              y: skyItems.clientHeight - event.clientY + 50 - starSize,
            };
            star.setPosition(targetCoordinates);
            star.soundEffect();
            starCenter.setBrightness(1, "white");
            clearTimeout(tid);
          }, animationSpeed);
        }
      }
      skyItems.addEventListener("click", fire);
    });
    return setLayoutsOrder([skyItems], sky);
  },
  backgroundLayout() {
    const { sky } = new Sky("#000");
    const { skyItems } = new SkyItems();
    const animationSpeed = 50;
    const starLimit = 300;

    setTimeout( (e) => {
      skyItems.innerHTML = null;
      const createdStars = [];

      const starCenter = new Star();
      starCenter.setSize(10);
      starCenter.setMovmentSpeed(10);
      starCenter.setColor("white");
      starCenter.setPosition({
        x: skyItems.clientWidth / 2 - 3,
        y: skyItems.clientHeight / 2 - 3,
      });
      starCenter.element.style.zIndex = 100000;
      starCenter.element.style.opacity = Percent(100);
      starCenter.setBrightness(1);
      skyItems.appendChild(starCenter.element);

      let counter = 0;
      function fire(event) {
        console.log(event);

        counter++;
        if (counter % 1 === 0) {
          if (createdStars.length > starLimit) {
            const target = createdStars[0];
            console.log(target);
            skyItems.removeChild(target.element);
            createdStars.splice(0, 1);
          }
          // Fire Start
          const star = new Star();
          //star.setColor('lime')
          star.element.style.opacity = Percent(100);
          const starSize = 6;
          starCenter.setBrightness(10, star.targetStarColor);
          star.setSize(starSize);
          const centerCoordinates = {
            x: skyItems.clientWidth / 2,
            y: skyItems.clientHeight / 2,
          };
          star.setPosition(centerCoordinates);
          createdStars.push(star);
          skyItems.appendChild(star.element);

          // Fire Achive
          const tid = setTimeout(() => {
            const targetCoordinates = {
              x: event.clientX,
              y: event.clientY,
            };
            star.setPosition(targetCoordinates);
            star.soundEffect();
            starCenter.setBrightness(1, "white");
            clearTimeout(tid);
          }, animationSpeed);
        }
      }

      const coordFonts = {
        A: [
          { clientX: 110, clientY: 800 },          
          { clientX: 105, clientY: 790 },          
          { clientX: 115, clientY: 790 },          
          { clientX: 100, clientY: 780 },          
          { clientX: 120, clientY: 780 }, 
          { clientX: 95, clientY: 770 },          
          { clientX: 125, clientY: 770 },          
          { clientX: 90, clientY: 760 },          
          { clientX: 130, clientY: 760 },         

          { clientX: 110, clientY: 770 },          
          { clientX: 115, clientY: 770 },          
          { clientX: 105, clientY: 770 },          
        ],
        F: [
          { clientX: 100, clientY: 800 },
          { clientX: 100, clientY: 790 },
          { clientX: 100, clientY: 780 },
          { clientX: 100, clientY: 770 },
          { clientX: 100, clientY: 760 },

          { clientX: 110, clientY: 800 },
          { clientX: 120, clientY: 800 },
          { clientX: 130, clientY: 800 },
          
          { clientX: 110, clientY: 780 },
          { clientX: 120, clientY: 780 },
        ],
        Ə: [
          { clientX: 100, clientY: 800 },
          { clientX: 110, clientY: 800 },
          { clientX: 120, clientY: 800 },
          { clientX: 130, clientY: 800 },

          { clientX: 130, clientY: 790 },
          { clientX: 130, clientY: 780 },
          { clientX: 130, clientY: 770 },
          { clientX: 130, clientY: 760 },

          { clientX: 120, clientY: 760 },
          { clientX: 110, clientY: 760 },
          { clientX: 100, clientY: 760 },
          
          { clientX: 100, clientY: 770 },
          
          { clientX: 100, clientY: 780 },
          { clientX: 110, clientY: 780 },
          { clientX: 120, clientY: 780 },
        ],
        R: [
          { clientX: 100, clientY: 800 },
          { clientX: 100, clientY: 790 },
          { clientX: 100, clientY: 780 },
          { clientX: 100, clientY: 770 },
          { clientX: 100, clientY: 760 },

          { clientX: 110, clientY: 800 },
          { clientX: 120, clientY: 800 },
          { clientX: 120, clientY: 790 },
          
          { clientX: 110, clientY: 780 },
          { clientX: 120, clientY: 780 },
          { clientX: 110, clientY: 770 },
          { clientX: 115, clientY: 765 },
          { clientX: 120, clientY: 760 },
        ],
        H: [
          { clientX: 100, clientY: 800 },
          { clientX: 100, clientY: 790 },
          { clientX: 100, clientY: 780 },
          { clientX: 100, clientY: 770 },
          { clientX: 100, clientY: 760 },

          { clientX: 110, clientY: 780 },
          { clientX: 120, clientY: 780 },

          { clientX: 130, clientY: 800 },
          { clientX: 130, clientY: 790 },
          { clientX: 130, clientY: 780 },
          { clientX: 130, clientY: 770 },
          { clientX: 130, clientY: 760 },

        ],
      }

      let coordinatesExample = [
        ...addSpaceToX(coordFonts.F, 5),
        ...addSpaceToX(coordFonts.Ə, 50),
        ...addSpaceToX(coordFonts.R, 100),
        ...addSpaceToX(coordFonts.Ə, 140),
        ...addSpaceToX(coordFonts.H, 190),
      ];

      coordinatesExample = addSpaceToY(coordinatesExample, getRandomBetween(-700, 0))
      coordinatesExample = addSpaceToX(coordinatesExample, getRandomBetween(0, skyItems.clientWidth / 1.3))

      function draw(coordinates=[], speed = 1000) {
        setTimeout(() => {
          if(coordinates.length !== 0){
            fire(coordinates[0])
            draw(coordinates, speed)
            coordinates.splice(0, 1);
          } else {
            setTimeout(async ()=> {
              await soundEffects('3', 100)
            }, 2500)
            setTimeout(async ()=> {
              window.location.reload()
            }, 3000)
          }
        }, speed)
      }

      function addSpaceToX(coordinateValue, space){
        return coordinateValue.map(letter => { return { clientX: (letter.clientX + space), clientY: letter.clientY }})
      }

      function addSpaceToY(coordinateValue, space){
        return coordinateValue.map(letter => { return { clientY: (letter.clientY + space), clientX: letter.clientX }})
      }

      draw(coordinatesExample, 300)
    });
    return setLayoutsOrder([skyItems], sky);
  },
};

class Game {
  start() {
    const gameArea = document.createElement("section");
    gameArea.style.width = "100%";
    gameArea.style.height = "100%";
    const layouts = [
      default_layouts[
        `backgroundLayout${getUrlParams(window.location.href).level || ""}`
      ](),
    ];
    return setLayoutsOrder(layouts, gameArea);
  }
}

export default Game;
