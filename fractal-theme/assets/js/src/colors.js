import tinycolor from 'tinycolor2';

function colorHexMatches() {
  const color = [...document.querySelectorAll('.frctl-color-name')];

  color.forEach(function (el) {
    const hexMatches = el.getAttribute('data-bg-color');
    const mostReadableColor = tinycolor.mostReadable(hexMatches, ['#ffffff', '#000000']).toHexString()
    el.setAttribute('style', `color: ${mostReadableColor}`);
  });
}

export default colorHexMatches;