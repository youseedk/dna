The `ys-u-visuallyhidden` class is used when the UI is showing elements, that _visually_ contain no text, ie. a button that only has an icon on it. In cases like these, we add an element with the `ys-u-visuallyhidden` class on it, to make sure that assistive technologies and search engines understand the purpose of the button.

**Please notice**: all utility classes are part of the basic `_base.scss`-file, which is required, so there is no need to import them specifically.

### CSS
<div class="element-preview">
  <div class="element-preview__inner" hidden>
    html:not(#ys-specificity) .ys-u-visuallyhidden {
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
      padding: 0;
    }
  </div>
</div>

```css
html:not(#ys-specificity) .ys-u-visuallyhidden {
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  padding: 0;
}
```
