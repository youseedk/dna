---
title: Visually Hidden
url: /docs/components/helper-classes/visually-hidden
category: component
primaryKeywords: ys-u-visuallyhidden css helper class accessibility seo
secondaryKeywords: show hide assistive technologies a11y
---

The `ys-u-visuallyhidden` class is used when the UI is showing elements, that _visually_ contain no text, ie. a button that only has an icon on it. In cases like these, we add an element with the `ys-u-visuallyhidden` class on it, to make sure that assistive technologies and search engines understand the purpose of the button.

**Please notice**: If you import css-files individually instead of using the bundle, be aware that all utility classes are part of the basic `ys-base.css`-file, which is required, so there is no need to import them specifically.

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
