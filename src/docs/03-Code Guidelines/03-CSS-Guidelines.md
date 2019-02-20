# Naming conventions
## BEM
- YouSee UI uses the **BEM** (__B__lock __E__lement __M__odifier) naming convention. For a quick intro, please read this excellent article by Harry Roberts: [MindBEMding – getting your head ’round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

## YS Classes
- All classes distributed in the YouSee UI are prefixed with `ys-`. This is to avoid naming conflicts and inheritance issues.
- `ys-`-classes may _never_ be overwritten, however it is allowed to "extend" them by creating modifiers (do so at your own risk). 

# Miscellaneous
- Never remove the `:focus` style completely. If you remove the default `outline`, please replace it with something that is either as noticeable or more noticeable.
- Don't mess with `cursor`-property unless you've invented a completely new (and un-native) interactive element.