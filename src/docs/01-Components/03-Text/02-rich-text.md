Rich Text is used for content provided by editors in Content Management Systems. These systems usually output a big chunk of HTML without classes, so DNA provides a container (`ys-rich-text`), which adds styling similar to the typography styles to the corresponding HTML elements.

<nav class="element-navigation">
  <dl class="element-navigation__list">
    <dt class="element-navigation__title">Table of contents</dt>
    <dd class="element-navigation__item">[Examples](#examples)</dd>
    <dd class="element-navigation__item">[HTML Guidelines](#html-guidelines)</dd>
    <dd class="element-navigation__item">[UX and Design Guidelines](#ux-and-design-guidelines)</dd>
  </dl>
</nav>

# Examples
## Rich Text
<div class="element-preview">
  <div class="element-preview__inner">{{render '@rich-text'}}</div>
</div>

```html
{{render '@rich-text'}}
```

## Rich Text on dark background
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@rich-text--rich-text-on-dark-background'}}</div>
</div>

```html
{{render '@rich-text--rich-text-on-dark-background'}}
```

# HTML Guidelines
Wrap the output element in a `ys-rich-text` container.

# UX and Design Guidelines

