# Typography
## Font
All main text on YouSee sites is set with the **LTF Etica** webfont, which is provided in four weights:
* light (200)
* Regular (400)
* Semibold (600)
* Bold (800)

The default font size on YouSee sites is 16px.

## UX and Design Guidelines
### Color
All fonts on the website should use the specified grey called "typography-grey" (#484848). Exceptions are:
- When used on dark background. In this case use white (#fff) instead.
- Legal text and other small print, which uses "grey-57" (#929292).
- Special cases.

## CSS Guidelines
### Webfont
The webfont (Etica) is preloaded with the CSS bundle.
If you are using the elements as stand-alone files, you need to import the webfont in your CSS file. This can be done in a number of ways, either by linking directly to the font on the YouSee CDN or by hosting the fonts on your own environment (the font files are located in the `assets/font` folder) and using your preferred font-loading strategy.

### Color
The color of the text is _not_ set in the CSS classes and should be set on the containing element instead. To see which colors to use, please read the "UX and Design Guidelines".

## HTML Guidelines
 - Always mark up text semantically, ie. only use one `<h1>` per page, even if the design shows two "big headlines". The visual representation is handled by CSS and not the HTML.
