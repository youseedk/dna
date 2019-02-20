A colour palette comprises primary and accent colours that can be used for illustration or to develop your brand colors. They’ve been designed to work harmoniously with each other. The colour palette starts with primary colours and secondary colours in a meaningful hierachy that conveys specific meanings.

> The following colour hierarchy was created to address some branding needs and also to keep it clear to users what is more important in the flow. 

<div class="frctl-example">
{{#each colors}}
  <dl class="frctl-colors">
  {{#each this}}
    <div class="frctl-palette">
      <dt class="frctl-palette-title">{{@key}}</dt>
      {{#each this}}
        <dd class="frctl-color">
          <div class="frctl-color-swatch" style="background-color: {{@this}}">
             <code class="frctl-color-name" data-bg-color="{{@this}}">{{@this}}</code>
          </div>
          <code class="frctl-color-variable-name">$ys-color-{{@key}}</code>
        </dd>
      {{/each}}
    </div>
  {{/each}}
  </dl>
{{/each}}
</div>

<script src="/assets/js/colors.js"></script>