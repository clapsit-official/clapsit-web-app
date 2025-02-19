export const getRandomBetween = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const calculateDistance = (coordinates1 = {x: 0, y: 0}, coordinates2 = {x: 0, y: 0}) => {
  const dx = coordinates2.x - coordinates1.x;
  const dy = coordinates2.y - coordinates1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export const getUrlParams = (url) => {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    const paramsObj = {};
    for (const [key, value] of params.entries()) {
        paramsObj[key] = value;
    }
    return paramsObj;
}