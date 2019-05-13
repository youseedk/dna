<nav class="element-navigation">
    <dl class="element-navigation__list">
        <dt class="element-navigation__title">Table of contents</dt>
        <dd class="element-navigation__item">[Examples](#examples)</dd>
        <dd class="element-navigation__item">[HTML Guidelines](#html-guidelines)</dd>
        <dd class="element-navigation__item">[UX and Design Guidelines](#ux-and-design-guidelines)</dd>
    </dl>
</nav>

# Examples
## Single example
<div class="element-preview">
    <div class="element-preview__inner">{{render '@ui-icons'}}</div>
</div>

```html
{{render '@ui-icons'}}
```

## All available UI icons
<div class="element-preview">
    <div class="element-preview__inner">
        <div class="icons-preview">
            {{#each icons}}
            <div class="icons-preview__item">
                <svg xmlns="http://www.w3.org/2000/svg" class="ys-icon">
                    <use xlink:href="/assets/svg/sprite/ui-icons.svg#ys-ui-icons-{{@this}}"></use>
                </svg>
            </div>
            {{/each}}
        </div>
    </div>
</div>

```html
{{#each icons}}
    <!-- {{@this}} -->
    <svg xmlns="http://www.w3.org/2000/svg" class="ys-icon">
        <use xlink:href="/assets/svg/sprite/ui-icons.svg#ys-ui-icons-{{@this}}"></use>
    </svg>

{{/each}}
```

# HTML Guidelines
Remember to change the path of the SVG Sprite so the `xlink:href` attribute points to the sprite on your own server.

For IE11 support of SVG Sprites please include [SVG for Everybody](https://github.com/jonathantneal/svg4everybody).

# UX and Design Guidelines

