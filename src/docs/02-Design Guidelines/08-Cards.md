---
title: Cards
url: /docs/design-guidelines/cards
category: design-guidelines
primaryKeywords: design objects stack layout stacked affixed
secondaryKeywords: kort collection gallery
---

In the physical world, objects can be stacked or affixed to one another, but cannot pass through each other. Objects also cast shadows and reflect light. Cards behave like objects so they should respect the same rules as objects.

Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length. A card collection is a layout of cards on the same plane.

## When to use a card
Collection or gallery comprises multiple data types, such as images, movies, text. When it requires interaction such as swipe, drag and drop, tap, etc.

## Card shapes
Cards are supplied in three basic, very similar shapes, with the only difference being the size of the corner radius:
- 16px
- 8px
- 4px

### Cards on top of cards
When cards are placed inside other cards, their radius should decrease respectively.
