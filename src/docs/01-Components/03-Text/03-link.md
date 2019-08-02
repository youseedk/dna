---
title: Link
url: /docs/components/text/link
category: component
primaryKeywords: ys-link text css hover
secondaryKeywords: primary visited active
---

<nav class="element-navigation">
  <dl class="element-navigation__list">
    <dt class="element-navigation__title">Table of contents</dt>
    <dd class="element-navigation__item">[Examples](#examples)</dd>
  </dl>
</nav>

# Examples
## Link
<div class="element-preview">
  <div class="element-preview__inner">{{render '@link'}}</div>
</div>

```html
{{render '@link'}}
```

## Link on dark background
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@link--link-on-dark-background'}}</div>
</div>

```html
{{render '@link'}}
```
# HTML Guidelines

# UX and Design Guidelines
## Text-decoration
All text-links should have an underline to clearly show the users that the element is clickable. When hovering the link the cursor should change to a pointer/hand to show the user that cliking will make the browser jump to a new location. The pointer/hand is a default behavior in all desktop browsers when using the `<a>` element.

## Colors
All text-links should follow below rules:
1. The default state has hex-color <span style="background-color: #1fab2e; color: #fff; padding: 2px 6px;">#1fab2e</span> with color-code `$ys-color-digital-grass`
2. The hover state has hex-color <span style="background-color: #484848; color: #fff; padding: 2px 6px;">#484848</span> with color-code `$ys-color-grey-28`
3. The visited state has hex-color <span style="background-color: #609; color: #fff; padding: 2px 6px;">#609;</span> with no color-code
4. The active state has hex-color <span style="background-color: #484848; color: #fff; padding: 2px 6px;">#484848</span> with color-code `$ys-color-grey-28`
