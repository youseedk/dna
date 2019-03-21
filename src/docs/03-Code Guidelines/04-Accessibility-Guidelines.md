We want to make sure our web sites can be used by all users. This mean we have a responsibility to make sure all content is accessible.

### Short list
Here is a short list of "accessiblity rules". Please note that this is just a few examples. There is tons of more information on the web about this.

-   Always write semantic HTML. This is helpful for visually Impaired users because screen readers recognize the meaning of the web page
-   Always provide text. Buttons needs to include text (and not just graphic) to be accessible for everybody. This rule applies for links too and actually all content.
-   Always add a `<label>` when working with `<input>` elements. They need to be linked for screenreaders access . Example: `<label for="search">Search</label><input id="search">`. The placeholder attribute is never an alternative
-   Always add language to the HTML document. Example: `<html lang="da">`
-   Always use WAI-ARIA for dynamic sites. Dynamic sites such as single page applications tend to get a little more complicated when it comes to accessibility. The WAI-ARIA standard provides tools to tackle accessibility in dynamic applications:  [https://www.w3.org/TR/wai-aria/](https://www.w3.org/TR/wai-aria/)
-   Always add the alt attribute on images



### More information
-   [https://www.w3.org/standards/webdesign/accessibility](https://www.w3.org/standards/webdesign/accessibility)
-   [https://www.w3.org/TR/wai-aria/](https://www.w3.org/TR/wai-aria/)
