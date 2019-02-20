const tinycolor = require("tinycolor2");

const color = [...document.querySelectorAll('.frctl-color-name')];

color.forEach(function(el) {
  const hexMatches = el.getAttribute('data-bg-color');
  const mostReadableColor = tinycolor.mostReadable(hexMatches, ['#ffffff', '#000000']).toHexString()
  el.setAttribute('style', `color: ${mostReadableColor}`);
});