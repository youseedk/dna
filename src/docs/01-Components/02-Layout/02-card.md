---
title: Cards
url: /docs/components/layout/card
category: component
primaryKeywords: ys-card css layout box-shadow
secondaryKeywords: stack
---

In the physical world, objects can be stacked or affixed to one another, but cannot pass through each other. Objects also cast shadows and reflect light. Cards behave like objects so they should respect the same rules as objects.

Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length. A card collection is a layout of cards on the same plane.

<nav class="element-navigation">
  <dl class="element-navigation__list">
    <dt class="element-navigation__title">Table of contents</dt>
    <dd class="element-navigation__item">[Examples](#examples)</dd>
    <dd class="element-navigation__item">[HTML Guidelines](#html-guidelines)</dd>
    <dd class="element-navigation__item">[UX and Design Guidelines](#ux-and-design-guidelines)</dd>
  </dl>
</nav>

# Examples
## Card
<div class="element-preview">
  <div class="element-preview__inner">{{render '@card'}}</div>
</div>

```html
{{render '@card'}}
```

## Card, dark
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@card--dark-card'}}</div>
</div>

```html
{{render '@card--dark-card'}}
```

## Card with medium corners
<div class="element-preview">
  <div class="element-preview__inner">{{render '@card--card-with-medium-corners'}}</div>
</div>

```html
{{render '@card--card-with-medium-corners'}}
```


## Card with small corners
<div class="element-preview">
  <div class="element-preview__inner">{{render '@card--card-with-small-corners'}}</div>
</div>

```html
{{render '@card--card-with-small-corners'}}
```


## HTML guidelines

## UX and Design guidelines

### When to use a card
- Collection or gallery comprises multiple data types, such as images, movies, text.
- When it requires interaction such as swipe, drag and drop, tap, etc

### Cards within cards
When using a card within a card, the shape should change as well, so that a **Big Card** contains a **Medium Card** which contains a **Small Card**

### Background Image
A Card can also contain a background image for visual purposes, but in this case no content is allowed, and it should only be used as decoration.
