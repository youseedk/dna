---
title: Typography
url: /docs/components/text/typography
category: component
primaryKeywords: font css text ys-main-title ys-primary-title ys-secondary-title ys-subtitle ys-body-text ys-small-text ys-list
secondaryKeywords: grey-28 484848 100 200 400 700 800 900
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
## Main title
<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography--default'}}</div>
</div>

```html
{{render '@typography--default'}}
```

## Main title (light)
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@typography--main-title-light'}}</div>
</div>

```html
{{render '@typography--main-title-light'}}
```

## Primary title
<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography--primary-title'}}</div>
</div>

```html
{{render '@typography--primary-title'}}
```

## Primary title (light)
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@typography--primary-title-light'}}</div>
</div>

```html
{{render '@typography--primary-title-light'}}
```

## Secondary title
<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography--secondary-title'}}</div>
</div>

```html
{{render '@typography--secondary-title'}}
```

## Secondary title (light)
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@typography--secondary-title-light'}}</div>
</div>

```html
{{render '@typography--secondary-title-light'}}
```

## Subtitle
<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography--subtitle'}}</div>
</div>

```html
{{render '@typography--subtitle'}}
```

## Subtitle (light)
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@typography--subtitle-light'}}</div>
</div>

```html
{{render '@typography--subtitle-light'}}
```

## Body text
<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography--body-text'}}</div>
</div>

```html
{{render '@typography--body-text'}}
```

## Body text (light)
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@typography--body-text-light'}}</div>
</div>

```html
{{render '@typography--body-text-light'}}
```

## Body text large
<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography--body-text-large'}}</div>
</div>

```html
{{render '@typography--body-text-large'}}
```

## Body text large (light)
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@typography--body-text-large-light'}}</div>
</div>

```html
{{render '@typography--body-text-large-light'}}
```

## Small text
<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography--small-text'}}</div>
</div>

```html
{{render '@typography--small-text'}}
```

## Small text (light)
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@typography--small-text-light'}}</div>
</div>

```html
{{render '@typography--small-text-light'}}
```

## Unordered list
<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography--unordered-list'}}</div>
</div>

```html
{{render '@typography--unordered-list'}}
```

## Unordered list (light)
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@typography--unordered-list-light'}}</div>
</div>

```html
{{render '@typography--unordered-list-light'}}
```

## Ordered list
<div class="element-preview">
  <div class="element-preview__inner">{{render '@typography--ordered-list'}}</div>
</div>

```html
{{render '@typography--ordered-list'}}
```

## Ordered list (light)
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@typography--ordered-list-light'}}</div>
</div>

```html
{{render '@typography--ordered-list-light'}}
```

# HTML Guidelines
Always mark up text semantically, ie. only use one `<h1>` per page, even if the design shows two “Main Title” elements. The visual representation is handled by CSS and not the HTML.

Please be aware that the color of the text is not set in the CSS classes and should be set on the parent element.

# UX and Design Guidelines
For accessibility reasons we should aim for a line-height adhering to the 8 point grid, which means rounding up numbers to meet the grid specs.

## Color
All fonts on the website should use the specified grey called “grey-10” (#191919). Exceptions are:
- When used on dark background. In this case use white (#fff) instead
- Special cases
