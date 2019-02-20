The `ys-u-neutral-button` is meant for use in cases where there is a UI element, that provides interaction, but doesn't look like a YouSee-themed button or link, ie. a toggle button for an accordion.

In some cases this class is perfectly combined with the `ys-u-visuallyhidden` class:
```
<button class="ys-u-neutral-button">
  <span class="ys-u-visuallyhidden">Button Text that isn't visible</span>
  <svg aria-hidden="true">
    ...
  </svg>
</button>
```
The code above will only display the SVG but will still be accessible to assistive technologies and search engines. The SVG is merely an example and could be any form of element, but it should always be `aria-hidden="true"`.

**Please notice**: all utility classes are part of the basic `_base.scss`-file, which is required, so there is no need to import them specifically.