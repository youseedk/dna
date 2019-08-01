---
title: YouSee Logo
url: /docs/components/icons-and-logo/logo
category: component
primaryKeywords: ys-icon yousee css icon image svg
secondaryKeywords: brand cvi
---

<nav class="element-navigation">
  <dl class="element-navigation__list">
    <dt class="element-navigation__title">Table of contents</dt>
    <dd class="element-navigation__item">[Examples](#examples)</dd>
    <dd class="element-navigation__item">[HTML Guidelines](#html-guidelines)</dd>
    <dd class="element-navigation__item">[UX and Design Guidelines](#ux-and-design-guidelines)</dd>
  </dl>
</nav>

# Examples
## Logo
<div class="element-preview">
  <div class="element-preview__inner">{{render '@logo'}}</div>
</div>

```html
{{render '@logo'}}
```

## Logo on dark background
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@logo--light'}}</div>
</div>

```html
{{render '@logo--light'}}
```

# HTML Guidelines
Copy the code directly into your soluton. Screenreaders will read "yousee" unless you add `aria-hidden="true"` to the SVG element.

# UX and Design Guidelines
Please respect the colors of the logo. Don't change the color of the logo on yousee.dk.