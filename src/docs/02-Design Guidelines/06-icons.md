---
title: Icons
url: /docs/design-guidelines/icons
category: design-guidelines
primaryKeywords: design visual logo brand svg design
secondaryKeywords: png figure ikon asset iconsystem
---

Icons are the visual expression of a brand’s products, services, and tools. Simple, bold, and friendly, they communicate the core idea and intent of a product. While each product icon is visually distinct, all product icons for a given brand should be unified through concept and execution.

Use these guidelines as a starting point to ensure that the products icon colors and key elements reflect the brand’s identity.

## Icon style
All icons are drawn with a 2 pixel line thickness and occational small filled shapes. All icons should be in **ys-color-grey-28** or **ys-color-white** ([See color definitions](colors)) when used on dark backgrounds. Icons should reflect the text colour.

> If you are a developer and looking for code examples to implement the SVG icons, please go to Components > Icons & Logo > [Icons](/docs/components/icons-and-images/icon).

## YouSee Icon Set
<div class="frctl-example">
    <div class="icons">
        {{#each icons}}
            <div class="icons__item">
                <figcaption class="icons__name">{{@this}}</figcaption>
                <figure class="icons__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ys-icon">
                        <use xlink:href="/assets/svg/sprite/icons.svg#ys-icon-{{@this}}"></use>
                    </svg>
                </figure>
                <div class="icons__download">
                    <a class="icons__download-link" href="/assets/svg/{{@this}}.svg" target="_blank" download aria-label="Download {{@this}}.svg">Download SVG</a>
                </div>
            </div>
        {{/each}}
    </div>
</div>
