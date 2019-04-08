Base contains the required minimum styles needed to include any of the components.

## Box sizing and font family
All elements require `box-sizing` to be set to `border-box` and they all use the LTF Etica font.
```css
[class*='ys-'],
[class*='ys-']::before,
[class*='ys-']::after {
  box-sizing: border-box;
  font-family: 'Etica', arial, helvetica, sans-serif;
}
```
