The grid system supplied with DNA is a fork of Bootstrap's ([v4.3](https://getbootstrap.com/docs/4.3/layout/grid/)) grid, which means that it's:
- mobile first
- flexbox based
- twelve columns

<nav class="element-navigation">
  <dl class="element-navigation__list">
    <dt class="element-navigation__title">Table of contents</dt>
    <dd class="element-navigation__item">[Differences between DNA and Bootstrap](#differences-between-dna-grid-and-bootstrap-s-grid)</dd>
    <dd class="element-navigation__item">[How it works](#how-it-works)</dd>
    <dd class="element-navigation__item">[Grid settings](#grid-settings)</dd>
    <dd class="element-navigation__item">[Auto Layout](#auto-layout)</dd>
    <dd class="element-navigation__item">[Responsive columns](#responsive-columns)</dd>
    <dd class="element-navigation__item">[Offsetting columns](#offsetting-columns)</dd>
    <dd class="element-navigation__item">[Vertical spacing](#vertical-spacing)</dd>
    <dd class="element-navigation__item">[More documentation](#more-documentation)</dd>
  </dl>
</nav>

## Differences between DNA grid and Bootstrap's grid
- all class names are prefixed with `ys-`, ie. `.ys-container-fluid`
- the DNA grid does _NOT_ provide flex-utilities
- It is not possible to set custom padding on the gutters
- the DNA grid has the option of vertical spacing
- the DNA grid has variable gutter width depending on the viewport width

## How it works
The grid uses containers, rows and columns to align content. A simple example could look like this:

<div class="element-preview">
  <div class="element-preview__inner">{{render '@grid--example-01'}}</div>
</div>

```html
{{render '@grid--example-01'}}
```

## Grid settings
<table>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Extra Small</th>
      <th scope="col">Small</th>
      <th scope="col">Medium</th>
      <th scope="col">Large</th>
      <th scope="col">Extra Large</th>
    <tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Viewport width</th>
      <td>< 576px</td>
      <td>≥ 576px</td>
      <td>≥ 768px</td>
      <td>≥ 992px</td>
      <td>≥ 1200px</td>
    </tr>
    <tr>
      <th scope="row">Max container width</th>
      <td>n/a</td>
      <td>540px</td>
      <td>720px</td>
      <td>992px</td>
      <td>1172px</td>
    </tr>
    <tr>
      <th scope="row">Class prefix</th>
      <td>`.ys-col`</td>
      <td>`.ys-col-sm-`</td>
      <td>`.ys-col-md-`</td>
      <td>`.ys-col-lg-`</td>
      <td>`.ys-col-xl-`</td>
    </tr>
    <tr>
      <th scope="row">Gutter width</th>
      <td>2 × 6px</td>
      <td colspan="2">2 × 12px</td>
      <td colspan="2">2 × 16px</td>
    </tr>
  </tbody>
</table>

## Auto layout
It is possible to create equal-width columns (regardless of viewport width) without setting width-specific classes on the columns, ie.:

<div class="element-preview">
  <div class="element-preview__inner">{{render '@grid--example-02'}}</div>
</div>

```html
{{render '@grid--example-02'}}
```

### Equal-width multi columns
By inserting a "breaking" element, it is also possible to create auto layout columns that span over multiple rows.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@grid--example-03'}}</div>
</div>

```html
{{render '@grid--example-03'}}
```

## Responsive columns
It is possible to add classes that determine a columns width depending on the viewport width, which makes responsive layouts very simple.
<div class="element-preview">
  <div class="element-preview__inner">{{render '@grid--example-05'}}</div>
</div>

```html
{{render '@grid--example-05'}}
```

## Offsetting columns
You can offset columns to the right by adding a `ys-offset-` class:

<div class="element-preview">
  <div class="element-preview__inner">{{render '@grid--example-06'}}</div>
</div>

```html
{{render '@grid--example-06'}}

## Vertical spacing
It is possible to add vertical spacing between columns in layouts that span over multiple rows by adding a modifying class to the `ys-row` element.

<div class="element-preview">
  <div class="element-preview__inner">{{render '@grid--example-04'}}</div>
</div>

```html
{{render '@grid--example-04'}}
```
Options provided are:
- `ys-row--vertical-spacing-sm` which adds 16px vertical spacing between column elements.
- `ys-row--vertical-spacing-md` which adds 24px vertical spacing between column elements.
- `ys-row--vertical-spacing-lg` which adds 32px vertical spacing between column elements.
- `ys-row--vertical-spacing-xl` which adds 48px vertical spacing between column elements.

## More documentation
For more documentation regarding the grid, please refer to [Bootstrap's docs page](https://getbootstrap.com/docs/4.3/layout/grid/), but please remember the [differences](#differences-between-dna-grid-and-bootstrap-s-grid).
