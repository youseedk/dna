---
title: Button
url: /docs/components/form-elements/buttons
category: component
primaryKeywords: ys-button css form link submit click hover cta
secondaryKeywords: cancel call to action disabled
---

Buttons are used to make common actions immediately visible and easy to perform with one click, tap, or keypress. Users can use them to navigate or to take action.

<nav class="element-navigation">
  <dl class="element-navigation__list">
    <dt class="element-navigation__title">Table of contents</dt>
    <dd class="element-navigation__item">[Examples](#examples)</dd>
    <dd class="element-navigation__item">[HTML Guidelines](#html-guidelines)</dd>
    <dd class="element-navigation__item">[UX and Design Guidelines](#ux-and-design-guidelines)</dd>
  </dl>
</nav>

# Examples
## CTA
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button--call-to-action'}}</div>
</div>

```html
{{render '@button--call-to-action'}}
```

## Default button
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button'}}</div>
</div>

```html
{{render '@button'}}
```

## Default button, light
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@button--light'}}</div>
</div>

```html
{{render '@button--light'}}
```


## Secondary button
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button--secondary-dark'}}</div>
</div>

```html
{{render '@button--secondary-dark'}}
```

## Secondary button, light
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@button--secondary-light'}}</div>
</div>

```html
{{render '@button--secondary-light'}}
```

## Tertiary button
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button--tertiary-dark'}}</div>
</div>

```html
{{render '@button--tertiary-dark'}}
```

## Tertiary button, light
<div class="element-preview element-preview--dark">
  <div class="element-preview__inner">{{render '@button--tertiary-light'}}</div>
</div>

```html
{{render '@button--tertiary-light'}}
```

## Button with icon
All of the above can be include an icon, ie. the *default* button:
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button--with-icon'}}</div>
</div>

```html
{{render '@button--with-icon'}}
```

In some cases it makes sense to place the icon before the text (e.g. a back button) which is also supported.

## Icon only button
All button colorways can be displayed with an icon only, ie. the *default* button:
<div class="element-preview">
  <div class="element-preview__inner">{{render '@button--icon-only'}}</div>
</div>

```html
{{render '@button--icon-only'}}
```
Important: Never leave out the `<span class="ys-button__text">` element, as this is included for accessibility purposes.


# HTML Guidelines
 - Only `<a>` and `<button>` elements are allowed to use the `.button` class
 - Remember to specify the `type` attribute when using a `button` element. The default is `submit` but in most cases you probably want to use `type="button"`

## Disabled buttons
Use the HTML attribute `disabled` as it will provide default browser behaviour and functionality.

## Buttons with icons
If you can't get the button to display an icon please read the HTML instructions under Components > Icons & Logo > [Icon](/docs/components/icons-and-logo/icon)


# UX and Design Guidelines
## CTA Usage
The **CTA** button should only be used for the MAIN or IMPORTANT calls to action on a page.

## Disabled buttons
Please be careful when using disabled buttons. Usability research shows that disabled buttons can confuse users: [Disabled Buttons suck](https://axesslab.com/disabled-buttons-suck/)

## How to combine buttons
- When displaying buttons next to each other or stacked, there should always be at least 16px spacing (margin) on all sides
- Never use more than one **CTA** button in a group
- When two buttons are side by side and perform opposing actions, ie. "Cancel" and "OK", the affirmative/positive action should always be displayed on the right


