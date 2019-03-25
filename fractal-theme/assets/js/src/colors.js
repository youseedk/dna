import tinycolor from 'tinycolor2';

function colorConverter() {
  const domToHex = document.getElementById('toHex')
  const domToRgb = document.getElementById('toRgb')
  const domToHsl = document.getElementById('toHsl')
  const domToScss = document.getElementById('toScss')
  const color = [...document.querySelectorAll('.colors__color-name')];

  color.forEach(function (el) {
    const hexMatches = el.getAttribute('data-bg-color');
    const mostReadableColor = tinycolor.mostReadable(hexMatches, ['#ffffff', '#000000']).toHexString()
    el.setAttribute('style', `color: ${mostReadableColor}`);

    if (hexMatches === '#fff') {
      el.parentElement.setAttribute('style', 'border-bottom: 1px solid #eee; background-color: #fff;');
      el.parentElement.parentElement.setAttribute('style', 'border: 1px solid #eee');
    }

    domToHex.addEventListener('click', () => el.innerText = hexMatches);
    domToRgb.addEventListener('click', () => el.innerText = tinycolor(hexMatches).toRgbString());
    domToHsl.addEventListener('click', () => el.innerText = tinycolor(hexMatches).toHslString());
    domToScss.addEventListener('click', () => el.innerText = el.getAttribute('data-scss-code'));
  });
}

export default colorConverter;
