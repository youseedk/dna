---
title: CSS & SCSS Guidelines
---

The CSS codebase is a Sass solution (we use the SCSS syntax) with BEM as naming convention. For a quick intro to BEM, please read this excellent article by Harry Roberts: [MindBEMding – getting your head ’round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

We use stylelint to test for possible errors and formatting issues. You can install tools like stylelint for Visual Studio Code to give you instant feedback on your code. You may also run the gulp task "stylelint" to test your scss code for errors.

We encourage you to follow these guidelines. If you fail to do so your code will probably;

-  make the code base less consistent
-  add unnecessary time to your pull request reviewers (because of comments)
-  break the build

There are exceptions where we want to commit code that "break" the rules — this is possible but requires that comments are inserted into the code. For example `/* stylelint-disable-line name-of-rule */`.

-  [The cursor property](#the-cursor-property)
-  [The focus property](#the-focus-property)
-  [YS class names](#ys-class-names)
-  [Comments](#comments)
-  [Capitalization](#capitalization)
-  [Class names and ID's](#class-names-and-id-s)
-  [Naming selectors](#naming-selectors)
-  [Nesting classes and selectors](#nesting-classes-and-selectors)
-  [Formatting rules](#formatting-rules)
  -  [Indentation](#indentation)
  -  [Quotes](#quotes)
  -  [Trailing whitespace](#trailing-whitespace)
  -  [Declaration stop](#declaration-stop)
  -  [Property name stops](#property-name-stops)
  -  [Declaration block separation](#declaration-block-separation)
  -  [Selector and declaration separation](#selector-and-declaration-separation)
  -  [Rule separation](#rule-separation)
-  [Shorthand properties](#shorthand-properties)
-  [Qualified selectors](#qualified-selectors)
-  [Media queries](#media-queries)
  -  [Nesting rules](#nesting-rules)
  -  [Mobile First approach](#mobile-first-approach)
  -  [Responsive breakpoints](#responsive-breakpoints)
-  [Vendor-specific prefixes](#vendor-specific-prefixes)
-  [!important](#-important)
-  [Pseudo elements](#pseudo-elements)
-  [Units](#units)
-  [Sass's ampersand](#sass-s-ampersand)


## The cursor property
Don't mess with `cursor`-property unless you've invented a completely new (and un-native) interactive element.

## The focus property
Never remove the `:focus` style completely. If you remove the default `outline`, please replace it with something that is either as noticeable or more noticeable.

## YS class names
- All classes distributed in the YouSee DNA are prefixed with `ys-`. This is to avoid naming conflicts and inheritance issues.
- `ys-`-classes may _never_ be overwritten or modified.

All `ys-` selectors are also preceded by `html:not(#ys-specificity)` which is added to heighten specificity on the selector. This is done to avoid other CSS from "bleeding" into the DNA components — ie. some projects who include DNA might not be using strict BEM (or similar), and if they have styling on elements there is no way to prevent those styles from being inherited by DNA components, so we have to do our best to have a higher specificity than those rules.

## Comments

Explain code as needed, where possible. (They will be removed in production anyway).
```html
//Use this for short comments

/* Use this for long comments that needs more explanation.
    What does it cover, what purpose does it serve, why is
    respective solution used or preferred */
```
## Capitalization

Use lowercase for everything. This applies to CSS selectors, properties, variables and property values etc. You can use a hyphen instead of camelCasing.

**Bad example**

    .Example {
      //
    }
    .contentBox {
      //
    }

**Good example**

    .example {
      //
    }

    .content-box {
      //
    }

## Class names and ID's

Class names should always follow BEM.

-  Never use ID as selectors, they are way too specific. Make heavy use of classes because they are the ideal selector

-  Blocks have NO prefixes

-  Elements are always prefixed with two underscores

-  modifiers are prefixed with tow hyphens

-  long names are separated by one hyphen

-  avoid underscores in class names besides for elements


**Bad examples**

    #some-class
    .class_name
    .longnotwellnamedclassname
    .block__withsomeelememt

**Good examples**

    .classname
    .class-name
    .long-wellnamed-classname
    .block__with-some-elememt
    .block__with-some-elememt--modifier

## Naming selectors

Naming selectors should always be sematic. Don’t name it based on its looks. That will quickly get redundant.

**Bad examples**

    .blue-button-with-space
    .blue-button-with-space--withyellowborder

**Good examples**

    .button--primary
    .button--primary--highlighted

## Nesting classes and selectors

Don't nest selectors if it’s not necessary. As a good practice maximum nest up to three layers.
Also, before every nested class or selector there should be a linebreak for readability reasons.

**Not allowed**

    .feedback {
      //

      .feedback__header {
        //

        .feedback__subheader {
          //

          .feedback__subheader--special {
            //
          }
        }
      }

      &__content {

        &--modifier {
          //
        }
      }
    }

**Good example**

    .feedback {
      //

      &__header {
        //
      }

      &__subheader {
        //

        &--special {
          //
        }
      }

      &__content {
        //

        &--modifier {
          //
        }
      }
    }

## Formatting rules

### Indentation

Indent by 2 spaces at all time. Don’t use tabs or mix tabs and spaces for indentation.

**Bad example**

    .example {
        color: $color-white;
    }

**Good example**

    .example {
      color: $color-white;
    }

### Quotes

Always use single quotes

**Bad example**

    content: "Hello";
    background: url("/img/image.jpg");

**Good example**

    content: 'Hello';
    background: url('/img/image.jpg');

### Trailing Whitespace

Remove trailing white spaces. Trailing white spaces are unnecessary and can complicate diffs.

**Bad example**

    .example {
      font-size: rem(16);_
    }__

**Good example**

    .example {
      font-size: rem(16);
    }

### Declaration Stop

End every declaration with a semicolon for consistency and extensibility reasons.

**Bad example**

    .class {
      display: block
    }

**Good example**

    .class {
      display: block;
    }

### Property Name Stops

Use a space after a property name’s colon. Always use a single space between property and value (but no space between property and colon) for consistency reasons.

**Bad example**

    .class {
      font-weight:bold;
    }

**Good example**

    .class {
      font-weight: bold;
    }


### Declaration Block Separation

Use a space between the last selector and the declaration block.
Always use a single space between the last selector and the opening brace that begins the declaration block.

The opening brace should be on the same line as the last selector in a given rule and the closing brace should be immediately after the last rule.

**Bad example**

    /* Not recommended: missing space and there is a unnecessary line break */
    .class{
      margin-top: rem(16);

    }

    /* Not recommended: unnecessary line break */
    .class
    {
      margin-top: rem(16);
    }

**Good example**

        .class {
        margin-top: rem(16);
        }

### Selector and Declaration Separation

Separate selectors and declarations by new lines.
Always start a new line for each selector and declaration.

**Bad example**

    &:hover, &:active, &:focus {
      background: $color-white;
      color: $color-white;
    }

**Good example**

    &:hover,
    &:active,
    &:focus {
      background: $color-white;
      color: $color-white;
    }

### Rule Separation

Separate rules by new lines.
Always put a blank line (two line breaks) between rules. Also if the class is nested

**Bad example**

    .class {
      margin: rem(16);
      min-width: rem(80);
    }
    .another-class {
      margin: rem(16);
      min-width: rem(80);
      .nested-class {
        margin: rem(16);
        min-width: rem(80);
      }
    }

**Good example**


    .class {
      margin: rem(16);
      min-width: rem(80);
    }

    .another-class {
      margin: rem(16);
      min-width: rem(80);

      .nested-class {
        margin: rem(16);
        min-width: rem(80);
      }
    }

## Shorthand Properties

Use shorthand properties where possible. CSS offers a variety of shorthand properties (like font) that should be used whenever possible. Using shorthand properties is useful for code efficiency and understand-ability.

**Bad example**

    border-top-style: none;
    font-family: palatino, georgia, serif;
    font-size: rem(16);
    font-weight: bold;
    line-height: 1.6;
    padding-bottom: rem(32);
    padding-left: rem(16);
    padding-right: rem(16);
    padding-top: 0;

**Good example**

    border-top: 0;
    font: bold rem(16)/1.6 palatino, georgia, serif;
    padding: 0 rem(16) rem(32);

## Qualified selectors

Don’t use qualified selectors with type selectors.

**Bad example**

    a.classname
    ul.someclass
    body div ul li.myclass

**Good example**

    .classname
    .someclass
    .myclass

## Media queries

### Nesting rules

Please nest all media queries directly in to the class it affects. Make sure there is an empty line above the media-query to improve readability.

**Bad example**

    .classname {
      margin: rem(16);
      min-width: rem(80);
    }

    @include mq($from: s-screen) {

      .classname {
        min-width: rem(128);
      }
    }

**Good example**

    .classname {
      margin: rem(16);
      min-width: rem(80);

      @include media-breakpoint-up(lg) {
        min-width: rem(128);
      }
    }

### Mobile First approach

Always declare your CSS rules for smallest screen possible. Then use breakpoints to change layout for bigger screens.

**Bad example**

    .classname {
      display: flex;

      @include media-breakpoint-down(lg) {
        display: block;
      }
    }

**Good example**


    .classname {
      display: block;

      @include media-breakpoint-up(lg) {
        display: flex;
      }
    }

### Responsive breakpoints

We have decided to use the same breakpoints as Bootstrap does. This make sense since Bootstrap is developed to be mobile first and we use the library for other helpful features such as grid and utility classes.
Bootstrap uses the following media queries.

**Breakpoints**

    xs = Extra small <576px (default)
    sm = Small ≥ 576px
    md = Medium ≥ 768px
    lg = Large ≥ 992px
    xl = Extra large ≥ 1200px

If you have installed Bootstrap you can use these helpful SCSS mixins:

    @include media-breakpoint-up(sm) { ... }
    @include media-breakpoint-up(md) { ... }
    @include media-breakpoint-up(lg) { ... }
    @include media-breakpoint-up(xl) { ... }

## Vendor-specific prefixes

Don't use them. We add them automatically when compiling SCSS code to CSS . In some rare cases you still need to add them though.

**Bad example**

    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;

**Good example**

    border-radius: 12px;

## !important

Using !important is bad practice and should be avoided. It makes it difficult to override if necessary and breaks the natural cascading in your stylesheets. Always look for a way to use specificity before even considering !important.
By indicating one or more elements before the element you're selecting, the rule becomes more specific and gets higher priority. If you HAVE to use !important please remember to disable the linter for that particular line: `/* stylelint-disable-line declaration-no-important */`.

**Bad example**

    .element {
      display: none !important;
    }

**Good example**

    .class .element {
      display: none;
    }

    // or if you have to

    .element {
      display: none; /* stylelint-disable-line declaration-no-important */
    }

## Pseudo elements

Always declare pseudo-elements with double colon notation. The double colon replaced the single-colon notation for pseudo-elements in CSS3.

Also, for pseudo-classes the specs says one single colon.

**Bad example**

    .element:before {
      content: 'This is bad';

      &:hover {
        //
      }
    }

**Good example**

    .element::before {
      content: 'This is good';

      &:hover {
        //
      }
    }

## Units

**Rem vs pixels**
Because our design files is normally made in pixels it makes good sense for us to use pixels too. In that way we are talking the same "language".
But because pixels doesn't scale are we using a small REM mixin. If you need to write _10px_ you should use _rem(10)_ instead. Our rem function will then take the pixel value and divide it with 16px (our base font-size). That will return it in rem which is a proportional CSS unit.  So, 10px = rem(10) = 0.625rem.

Values below one should never have a leading zero and if it's a comma-seperated list, there should be a space after each comma.

**Borders**:
You can use px for borders because it doesn't make sense to scale a border. Also, px-based values are allowed for box-shadows too.

**Bad example**

    .element {
      width: 20px;
      height: 80px;
      animation-duration: 0.5s;
      border: .975em solid black;
      padding-top: 10px;
    }

**Good example**

    .element {
      width: rem(20);
      height: rem(80);
      animation-duration: .5s;
      border: 1px solid $color-black;
      padding-top: rem(10)
    }

## Sass's ampersand

The ampersand "&" is a nice Sass feature. But please use it for pseudo classes and for elements and modifiers only. If we use it elsewhere the code will become difficult to read.

**Bad example**

    .time {
      //

      &__timestamp {
        //

        &-title {
          //

          &-date {
            //
          }
       }
    }

**Good example**

    .time {
      //

      &__timestamp {
        //
      }

      &__timestamp-title {
        //
      }

      &__timestamp-title-date {
        //
      }
    }

