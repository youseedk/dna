---
title: Accessibility Guidelines
url: /docs/code-guidelines/accessibility-guidelines
category: code-guidelines
primaryKeywords: code html css aria a11y focus keyboard navigation html5 semantic
secondaryKeywords: form label low contrast landmark wai w3
---

We want to make sure our products can be used by all users. This mean we have a responsibility to make our websites accessible too. To ensure this all YouSee sites and web applications must adhere to the [WCAG 2.1 AA guidelines](https://www.w3.org/TR/WCAG21/).

## Common Failures

### Low Contrast
The WCAG 2.1 AA guidelines state that text should have a contrast ratio of 4.5:1 except when the text is "Large Text". "Large Text" is defined as being either set with a minimum font size of 24px (regular) OR a minimum font size of 19px (bold).
The colors provided in YouSee DNA must be used as stated to comply with this guideline.

To calculate contrast ratio of new colors, we recommend using [Lea Verou's contrast ratio tool](https://contrast-ratio.com/).

### Keyboard Navigation
All content must be accessible through keyboard navigation. To make sure this is the case, follow these simple tips:
- Never remove the `:focus` property completely in CSS.
- Use semantic HTML at all times, especially when it comes to interactive elements; ie. use a `<button>` element for togglable content, burger navigation etc.
- Make sure your content comes in the right order, so the `focus`-styles don't jump around the page, but follow a linear pattern.

### ALT-attributes
Always provide `alt`-attributes for images. If the image is purely decorational, please provide an empty `alt`-attribute, ie.: `<img src="image.png" alt="" />` — this will prevent screen readers from reading out the source file's name (which in this case would be "i m a g e period p n g").

### Provide a site language
Always add language to the HTML document, ie.: `<html lang="da">`. This helps assistive technologies such as screen readers to render the content in the right language.

### Provide textual content
Some buttons or links might only visually contain an icon or an image, but they should always contain textual content as well. In these cases it is possible to hide the textual content visually, while it's still availabe to assistive technologies. Code example:
```
<button>
  <img src="download-icon.png" alt="" />
  <span class="visually-hidden">Download file</span>
</button>
```
While this could also be solved using the `aria-label` attribute, textual content is  considered as best practice for many reasons:
- If CSS fails to load or apply correctly, using real text will still be accessible.
- Textual content is best for search engines. Aria-labels is only considered as alternative text for screen reader users and not preferable when it comes to SEO.
- Screen readers such as NVDA, JAWS, VoiceOver, Win-Eyes, Dolphin and	SaToGo has different reliability. Many of them don't suppport aria-label if it's used on some elements such as `<input>`, `<span>`, `<a>` and `<div>` elements.

### Form labeling
All form inputs (`<input>`, `<textarea>`, `<select>` etc.) must have an associated `<label>` element. This can be done either explicitly (through an `id` attribute) or implicitly (`<input>` is inside the `<label>`). The `<placeholder>`-attribute is NEVER an acceptable substitute for the `<label>` element and is generally considered bad for usability and accessibility.

### Heading order
Heading elements should always come in the correct order and never skip a level: an `<h6>` should always be preceded by an `<h5>` should always be preceded by an `<h4>` should always be preceded by an `<h3>` should always be preceded by an `<h2>` should always be preceded by an `<h1>`.

### Link text
Always provide non-ambigious link (and button) text. The links should never be (only) "Click here", "Read more", "Buy this", "Continue" etc. Visually impaired users will in most cases only read the link text (or hear it through a screen reader) and in those cases the link text needs to provide context, ie.: "Buy the iPhone X" instead of "Buy this".

### ARIA roles
ARIA roles are generally not needed when using semantic HTML, except when creating custom UI elements such as accordions, toggle functionality, modal windows etc. Dynamic sites such as single page applications tend to get a little more complicated when it comes to accessibility. The WAI-ARIA standard provides tools to tackle accessibility in dynamic applications:  [https://www.w3.org/TR/wai-aria/](https://www.w3.org/TR/wai-aria/).

## More information
- [W3C Accessibility](https://www.w3.org/standards/webdesign/accessibility)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/)

## Tools
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [Web Accessibility Evaluation Tool (WAVE)](https://wave.webaim.org/)
- [Achecker validator](https://achecker.ca/checker/index.php)
- [HTML Codesniffer Bookmarklet](https://squizlabs.github.io/HTML_CodeSniffer/)
