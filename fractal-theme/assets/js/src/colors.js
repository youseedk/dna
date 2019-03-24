import tinycolor from 'tinycolor2';

function colorHexMatches() {
  const color = [...document.querySelectorAll('.colors__color-name')];

  color.forEach(function (el) {
    const hexMatches = el.getAttribute('data-bg-color');
    const mostReadableColor = tinycolor.mostReadable(hexMatches, ['#ffffff', '#000000']).toHexString()
    //const rgbColor = tinycolor(hexMatches).setAlpha(.1).toRgbString();
    el.setAttribute('style', `color: ${mostReadableColor}`);
    //el.parentElement.nextElementSibling.setAttribute('style', `background-color: ${rgbColor}`);

   if (hexMatches === '#fff') {
    el.parentElement.setAttribute('style', 'border-bottom: 1px solid #eee; background-color: #fff;');
    el.parentElement.parentElement.setAttribute('style', 'border: 1px solid #eee');
   }
  });
}

export default colorHexMatches;
