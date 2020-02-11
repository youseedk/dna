---
title: Utilities classes for layout
url: /docs/components/helper-classes/utilities-for-layout
category: component
primaryKeywords: ys-u-justify-content-center ys-u-grid-breaker center align css helper class
secondaryKeywords: show hide assistive technologies a11y
---

**Please notice**: If you installed YouSee DNA with npm, be aware that all utility classes are part of the basic `base.css`-file if you add css-files individually.


### ys-u-justify-content-center
The `ys-u-grid-breaker` utility class can be used to to center flexbox items.
<div class="element-preview">
  <div class="element-preview__inner" hidden>
    html:not(#ys-specificity) .ys-u-justify-content-center {
      justify-content: center;
    }
  </div>
</div>

```css
html:not(#ys-specificity) .ys-u-justify-content-center {
  justify-content: center;
}
```


### ys-u-w-100
The `ys-u-w-100` utility class forces next columns to break to a new line.
Breaking columns to a new line in flexbox requires a small hack. Add an element with `width: 100%` wherever you want to wrap your columns to a new line.
<div class="element-preview">
  <div class="element-preview__inner" hidden>
    html:not(#ys-specificity) .ys-u-w-100 {
      width: 100%;
    }
  </div>
</div>

```css
html:not(#ys-specificity) .ys-u-w-100 {
  width: 100%;
}
```

