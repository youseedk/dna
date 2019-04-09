Base contains the required minimum styles needed to include any of the components.

## Box sizing and font family
All elements require `box-sizing` to be set to `border-box` and they all use the LTF Etica font.

### CSS
<div class="element-preview">
  <div class="element-preview__inner" hidden>
    html:not(#ys-specificity) [class*='ys-'],
    html:not(#ys-specificity) [class*='ys-']::before,
    html:not(#ys-specificity) [class*='ys-']::after {
      box-sizing: border-box;
      font-family: 'Etica', arial, helvetica, sans-serif;
    }
  </div>
</div>

```css
html:not(#ys-specificity) [class*='ys-'],
html:not(#ys-specificity) [class*='ys-']::before,
html:not(#ys-specificity) [class*='ys-']::after {
  box-sizing: border-box;
  font-family: 'Etica', arial, helvetica, sans-serif;
}
```
