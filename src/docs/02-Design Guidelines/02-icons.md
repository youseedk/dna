This is the official icons we use for yousee.dk. The purpose for this list is to provide you an overview of all icons, but also to make sure you can download our SVG files in a convenient way.

> If you are a developer and looking for an easy way to implement these, you may want to go to <a href="/components/detail/icon-set">Icon Set</a> or <a href="/components/detail/ui-icons">UI Icons</a> in stead. Here you will find code.

<div class="frctl-example">
    <div class="icons">
        {{#each icons}}
            <div class="icons__item">
                <figcaption class="icons__name">{{@this}}</figcaption>
                <figure class="icons__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ys-icon">
                        <use xlink:href="/assets/svg/sprite/icon-set.svg#ys-icon-set-{{@this}}"></use>
                    </svg>
                </figure>
                <div class="icons__download">
                    <a class="icons__download-link" href="/assets/svg/icon-set/{{@this}}.svg" target="_blank" download>Download SVG</a>
                </div>
            </div>
        {{/each}}
    </div>
</div>
