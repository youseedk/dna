<nav class="element-navigation">
  <dl class="element-navigation__list">
    <dt class="element-navigation__title">Table of contents</dt>
    <dd class="element-navigation__item">[Examples](#examples)</dd>
    <dd class="element-navigation__item">[HTML Guidelines](#html-guidelines)</dd>
    <dd class="element-navigation__item">[UX and Design Guidelines](#ux-and-design-guidelines)</dd>
  </dl>
</nav>

# Examples
## Checkbox
<div class="element-preview">
  <div class="element-preview__inner">{{render '@checkbox'}}</div>
</div>

```html
{{render '@checkbox'}}
```

## Checkbox on dark background
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@checkbox--checkbox-on-dark-background'}}</div>
</div>

```html
{{render '@checkbox--checkbox-on-dark-background'}}
```

## Disabled checkbox
<div class="element-preview">
  <div class="element-preview__inner">{{render '@checkbox--checkbox-(disabled)'}}</div>
</div>

```html
{{render '@checkbox--checkbox-(disabled)'}}
```

## Disabled checkbox on dark background
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@checkbox--checkbox-(disabled)-on-dark-background'}}</div>
</div>

```html
{{render '@checkbox--checkbox-(disabled)-on-dark-background'}}
```

# HTML Guidelines

# UX and Design Guidelines
Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. In other words, each checkbox is independent of all other checkboxes in the list, so checking one box doesn't uncheck the others. A stand-alone checkbox is used for a single option that the user can turn on or off. (source: [Checkboxes vs. Radio Buttons](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/))

Checkboxes must never be distributed horizontally at it makes it harder to:
- scan the options
- distinguish which checkbox a label is associated with
