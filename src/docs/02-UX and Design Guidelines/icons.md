A colour palette comprises primary and accent colours that can be used for illustration or to develop your brand colors. They’ve been designed to work harmoniously with each other. The colour palette starts with primary colours and secondary colours in a meaningful hierachy that conveys specific meanings.

> The following colour hierarchy was created to address some branding needs and also to keep it clear to users what is more important in the flow.

<div class="icons">
    {{#each icons}}
    <div class="icons__item">
        <figure class="icons__icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="ys-icon">
                <use xlink:href="/assets/svg/sprite/icon-set.svg#ys-icon-set-{{@this}}"></use>
            </svg>
        </figure>
                <figcaption class="icons__name">{{@this}}</figcaption>
                </div>
    {{/each}}
</div>
