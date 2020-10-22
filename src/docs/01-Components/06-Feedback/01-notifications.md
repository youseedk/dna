---
title: Notifications
url: /docs/components/feedback/notifications
category: component
primaryKeywords: ys-notification css feedback info
secondaryKeywords: critical warning error success box
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
## Notification (info)
<div class="element-preview">
  <div class="element-preview__inner">{{render '@notification'}}</div>
</div>

```html
{{render '@notification'}}
```

## Notification (warning)
<div class="element-preview">
  <div class="element-preview__inner">{{render '@notification--warning'}}</div>
</div>

```html
{{render '@notification--warning'}}
```

## Notification (success)
<div class="element-preview">
  <div class="element-preview__inner">{{render '@notification--success'}}</div>
</div>

```html
{{render '@notification--success'}}
```

## Notification (error)
<div class="element-preview">
  <div class="element-preview__inner">{{render '@notification--error'}}</div>
</div>

```html
{{render '@notification--error'}}
```

## Notification with no shadow (info)
<div class="element-preview">
  <div class="element-preview__inner">{{render '@notification--with-no-shadow'}}</div>
</div>

```html
{{render '@notification--with-no-shadow'}}
```


# HTML Guidelines

# UX and Design Guidelines
Notifications should be used on top of content and positioned in another layer like a modal on top of content.
