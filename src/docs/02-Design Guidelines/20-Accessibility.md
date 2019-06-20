---
title: Accessibility
url: /docs/design-guidelines/accessibility
category: design-guidelines
primaryKeywords: WCAG AA color contrast requirement
secondaryKeywords: aria assistive technology screen reader visual auditory motor cognitive impairments a11y
---

Recently YouSee Digital First Tribe decided to go for a better Global Accessibility Rating, The WCAG AA rating. For too long, accessibility has been misunderstood as building sites for a small group of users of assistive technology — a blind person using a screen reader for example — and far too often dismissed as too complex, too time-consuming, or “not our customers.” Accessibility, however, is not just for a single, small group, but for an estimated 15% of people worldwide who have some level of temporary visual, auditory, motor, and cognitive impairments.

## How to test your content
Automated testing can be done in several ways, and it is recommended to use at least two different tools, as all tools are built differently and some of the criteria they test against are "opinonated".

### Recommended testing tools
- [Web Accessibility Evaluation Tool (WAVE)](https://wave.webaim.org/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [Achecker validator](https://achecker.ca/checker/index.php)
- [HTML Codesniffer Bookmarklet](https://squizlabs.github.io/HTML_CodeSniffer/)

## Honorable Mention Award
Lift your squads most important journeys to a AA rating to win the Tribes' Accessibility Honorable Mention award. Come by Delta Squad if you want to know more on how to do it.

## Color contrast
The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

### Large text<sup>1</sup>
large-scale text and images of large scale text have a contrast ratio of at least 3:1.

### Incidental
Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.

### Logotypes
Text that is part of a logo or brand name has no minimum contrast requirement.

#### Notes
<sup>1)</sup> Large text is defined as being either a) 19px or above AND bold b) 24px or above.
