---
title: HTML Guidelines
url: /docs/code-guidelines/html-guidelines
category: code-guidelines
primaryKeywords: code accessibility semantic html5 encoding a11y
secondaryKeywords: break spaces attributes
---

-  [HTML5 standards](#html5-standards)
-  [Semantic HTML](#semanticHTML)
-  [Indentation](#indentation)
-  [Encoding](#encoding)
-  [Lower case elements and attributes](#lower-case-elements-and-attributes)
-  [Quote attribute values](#quote-attribute-values)
-  [Image attributes](#image-attributes)
-  [Boolean attributes](#boolean-attributes)
-  [Break spaces](#break-spaces)
-  [Break element](#break-element)

## HTML5 standards

Always write HTML that follows the standards defined by the W3C and the WHATWG. To test if your code follows these standards, there are multiple tools available, among them [The W3C validation service](https://validator.w3.org/), where you can copy/paste HTML code. Another option is a browser extension such as [The Web Developer Toolbar](https://chrispederick.com/work/web-developer/), that allows you to validate HTML that is on a local machine/server.

## Semantic HTML

Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a `<p>` tag indicates that the enclosed text is a paragraph where a `<div>` or a `<span>` element indicates nothing.

Semantic HTML provides:

-  More information to search engines (SEO)
-  More accessible content (Accessibility)
-  Help for screenreader users to understand the contents structure and gives it meaning (Accessibility)
-  Meaning to the browser but also for other developers (readability)

## Indentation

Indent by 4 spaces at all time. Don’t use tabs or mix tabs and spaces for indentation. Plese note that this rule does not apply for HTML used inside .js or .jsx files. Here you should follow the JS linting rules.

**Bad example**

      <section>
        <p>This is a paragraph.</p>
      </section>

**Good example**

      <section>
          <p>This is a paragraph.</p>
      </section>

## Encoding

Make sure your editor uses UTF-8 as character encoding. Specify the encoding in HTML templates and documents like this.

      <meta charset="utf-8" />

## Lower case elements and attributes

Always use lowercase for elements and attributes. It looks cleaner and improves readability.

**Bad example**

      <SECTION>
          <p ID="test">This is a paragraph.</p>
      </SECTION>

**Good example**

      <section>
          <p id="test">This is a paragraph.</p>
      </section>

## Quote attribute values

HTML attributes must always use double quotes (").
Plese note that this rule does not apply for HTML used inside .js or .jsx files. Here you should follow the JS linting rules.

**Bad example**

      <table class=classname>
      <table class='classname'>

**Good example**

      <table class="classname">

## Image attributes

Always use the alt attribute with images. It is important for accessibility issues.
Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute.

**Bad example**

      <img src="sc.png" /> <!-- Screenreaders will read the scr attribute if no alternative text is added. Never do this -->

**Good examples**

      <img src="sc.png" alt="" /> <!-- Screenreaders will skip/ignore this image. Useful if the image is only decorative -->
      <img src="sc.png" alt="Sitecore" /> <!-- Screenreaders will read the alternative text "Sitecore" -->

## Boolean attributes

Please use attribute minimization when you can.

**Bad example**

    <input type="checkbox" name="" value="" disabled="disabled" />
    <input type="checkbox" name="" value="" checked="checked" />

**Good example**

    <input type="checkbox" name="" value="" disabled />
    <input type="checkbox" name="" value="" checked />

## Break spaces

Usage of non-breaking spaces "&nbsp;" and similar special characters like &#160; is being misused way to often. Non-breaking spaces are just what they sound like - spaces where a line break will not occur.
You should **not** use them to add space between words, sentences, or elements. Especially not elements.
Use CSS to add padding or margin instead.

## Break element

Usage of the `<br>` element should be avoided. This element/tag is something WYSIWYG editors inserts to do a linebreak in parapgraphs.
Use CSS to add padding or margin instead.


