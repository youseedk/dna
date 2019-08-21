# Button
## Variants
Buttons come in seven different colorways:
- **Default** (transparent with dark border and text)
- **Light** (transparent with light border and text)
- **CTA** (green)
- **Solid Dark** (solid with dark background and light text)
- **Solid Light** (solid with light background and dark text)
- **Stripped Dark** (transparent with dark text)
- **Stripped Light** (transparent with light text)

Which can be combined with three different shapes
 - **pill shaped** (default shape)
 - **pill shaped with icon**
 - **circle with icon only**

Furthermore there is also the option of making the button 100% wide relative to it's container element:
 - **block**

 The colorsways can be combined with the shapes in all thinkable ways, so a button can be both **Solid Dark** _AND_ **circle with icon only**.

 Lastly there is the **Neutral Button**, which has no visual appearance at all — this is meant for those cases where you want to display a clickable icon without any other design. Please be careful when using this, as it should be obvious for any user what's clickable. This button has no size by nature but will size itself according to the content.

### Disabled buttons
Use the HTML attribute `disabled` as it will provide default browser behaviour and functionality.

## UX and Design Guidelines
### CTA Usage
The **CTA** button should only be used for the MAIN or IMPORTANT calls to action on a page.

### Disabled buttons
Please be careful when using disabled buttons. Usability research shows that disabled buttons can confuse users: [Disabled Buttons suck](https://axesslab.com/disabled-buttons-suck/)

### How to combine buttons
- Buttons should be side-by-side and have a horizontal margin between them of at least 16px
- Never use more than one **CTA** button in a group
- When two buttons are side by side and perform opposing actions, ie. "Cancel" and "OK", the affirmative/positive action should always be displayed on the right

 ## HTML Guidelines
 - Only `<a>` and `<button>` elements are allowed to use the `.button` class
 - Remember to specify the `type` attribute when using a `button` element. The default is `submit` but in most cases you probably want to use `type="button"`
