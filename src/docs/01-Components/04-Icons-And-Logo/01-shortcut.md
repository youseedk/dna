---
title: Shortcut
url: /docs/components/icons-and-logo/shortcut
category: component
primaryKeywords: ys-shortcut css icon image svg css
secondaryKeywords: ikon genvej
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
  <div class="element-preview__inner">{{render '@shortcut'}}</div>
</div>

```html
{{render '@shortcut'}}
```

# HTML Guidelines
1. Make sure you change the path in the `xlink:href` attribute to match your own SVG file. Copy the file from DNA (the node_modules folder) to your own solution. This is something you need to do automatically through webpack, gulp or another task-runner everytime you build your solution. Please don't copy it manually because then it can get outdated.

2. Change the ID of the icon to match the one you want to use. E.g. `#ys-icon-wifi` would give you the wifi icon.
For a full overview of all available icons, please visit Design Guidelines > [Icons](/docs/design-guidelines/icons).

3. For IE11 support of SVG Sprites please include [SVG for Everybody](https://github.com/jonathantneal/svg4everybody).

# UX and Design Guidelines
