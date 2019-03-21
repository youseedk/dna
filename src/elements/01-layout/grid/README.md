The grid included in YouSee DNA is the Bootstrap grid, so please refer to the [documentation on their website](https://getbootstrap.com/docs/4.2/layout/grid/). Please notice that it is only the "core" grid classes from Bootstrap, that are included, ie. the flex-utilities and margin-utilities from Bootstrap are _not_ included.
The grid's settings is defined by YouSee and it has also been expanded and modified slighly (documented below).

## Settings
- The grid consists of 12 columns
- The gutters vary in sizes depending on the viewport size:
    - 12px on devices with a viewport width smaller than 576px
    - 24px on devices with a viewport width between 576px and 991px
    - 32px on devices with a viewport width larger than 992px

## Modifications, Expansions and Limitations
All `container` elements have inside padding, to avoid content hitting the edge of the viewport.

It is possible to add vertical padding to the `col-*` children inside a `row` by adding a modifier class to the row, ie.:
```
<div class="container-fluid">
  <div class="row row--vertical-spacing-sm">
    <div class="col-6">Column</div>
    <div class="col-6">Column</div>
    <div class="col-6">Column</div>
    <div class="col-6">Column</div>
  </div>
</div>
```
The above code will produce a layout with two rows of two columns with 16px vertical margin.

The following modifier classes for vertical margins are available:
- `row--vertical-spacing-sm` (16px)
- `row--vertical-spacing-md` (24px)
- `row--vertical-spacing-lg` (32px)
- `row--vertical-spacing-xl` (48px)

It is not possible to add custom padding to columns in the YouSee grid.
