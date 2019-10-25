---
title: Icon
url: /docs/components/icons-and-logo/icon
category: component
primaryKeywords: ys-icon yousee icons images sprite svg css
secondaryKeywords: brand png
---

<nav class="element-navigation">
  <dl class="element-navigation__list">
    <dt class="element-navigation__title">Table of contents</dt>
    <dd class="element-navigation__item">[Examples](#examples)</dd>
    <dd class="element-navigation__item">[HTML Guidelines](#html-guidelines)</dd>
    <dd class="element-navigation__item">[UX and Design Guidelines](#ux-and-design-guidelines)</dd>
  </dl>
</nav>

# Example
<div class="element-preview">
  <div class="element-preview__inner">{{ render '@icon--plus' }}</div>
</div>

```html
{{render '@icon--plus'}}
```

# HTML Guidelines
1. Make sure you change the path in the `xlink:href` attribute to match your own SVG file. Copy the file from DNA (the node_modules folder) to your own solution. This is something you need to do automatically through webpack, gulp or another task-runner everytime you build your solution. Please don't copy it manually because then it can get outdated.

2. Change the ID of the icon to match the one you want to use. E.g. `#ys-icon-wifi` would give you the wifi icon.
For a full overview of all available icons, please visit Design Guidelines > [Icons](/docs/design-guidelines/icons).

3. For IE11 support of SVG Sprites please include [SVG for Everybody](https://github.com/jonathantneal/svg4everybody).

# UX and Design Guidelines
Icons are the visual expression of a brand’s products, services, and tools. Simple, bold, and friendly, they communicate the core idea and intent of a product. While each product icon is visually distinct, all product icons for a given brand should be unified through concept and execution.

Use these guidelines as a starting point to ensure that the products icon colors and key elements reflect the brand’s identity.

## Icon style
All icons are drawn with a 2 pixel line thickness and occational small filled shapes. All icons should be in **ys-color-grey-28** or **ys-color-white** ([See color definitions](/docs/design-guidelines/colors)) when used on dark backgrounds. Icons should reflect the text colour.
