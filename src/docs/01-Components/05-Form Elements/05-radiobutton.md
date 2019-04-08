<nav class="element-navigation">
  <dl class="element-navigation__list">
    <dt class="element-navigation__title">Table of contents</dt>
    <dd class="element-navigation__item">[Examples](#examples)</dd>
    <dd class="element-navigation__item">[HTML Guidelines](#html-guidelines)</dd>
    <dd class="element-navigation__item">[UX and Design Guidelines](#ux-and-design-guidelines)</dd>
  </dl>
</nav>

# Examples
## Radio Button
<div class="element-preview">
  <div class="element-preview__inner">{{render '@radio-button'}}</div>
</div>

```html
{{render '@radio-button'}}
```

## Radio Button on dark background
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@radio-button--radio-button-on-dark-background'}}</div>
</div>

```html
{{render '@radio-button--radio-button-on-dark-background'}}
```

## Disabled radio-button
<div class="element-preview">
  <div class="element-preview__inner">{{render '@radio-button--radio-button-(disabled)'}}</div>
</div>

```html
{{render '@radio-button--radio-button-(disabled)'}}
```

## Disabled radio-button on dark background
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@radio-button--radio-button-(disabled)-on-dark-background'}}</div>
</div>

```html
{{render '@radio-button--radio-button-(disabled)-on-dark-background'}}
```

# HTML Guidelines

# UX and Design Guidelines
Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list. (source: [Checkboxes vs. Radio Buttons](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/))

Radio Buttons must never be distributed horizontally at it makes it harder to:
- scan the options
- distinguish which radiobox a label is associated with
