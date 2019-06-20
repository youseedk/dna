---
title: Media Queries
url: /docs/components/helper-classes/media-queries
category: component
primaryKeywords: ys-u-until- ys-u-from- helper class css max-width min-width
secondaryKeywords: showing hiding content viewport
---

DNA provides some simple helper classes for showing/hiding elements depending on the viewport width.

## Styling on max-width
<table>
  <thead>
    <tr>
      <th scope="col">↓ Class name / Max-width →</th>
      <th scope="col">576px</th>
      <th scope="col">768px</th>
      <th scope="col">992px</th>
      <th scope="col">1200px</th>
      <th scope="col">> 1200px</th>
    <tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">`.ys-u-until-sm`</th>
      <td>Visible</td>
      <td>Not visible</td>
      <td>Not visible</td>
      <td>Not visible</td>
      <td>Not visible</td>
    </tr>
    <tr>
      <th scope="row">`.ys-u-until-md`</th>
      <td>Visible</td>
      <td>Visible</td>
      <td>Not visible</td>
      <td>Not visible</td>
      <td>Not visible</td>
    </tr>
    <tr>
      <th scope="row">`.ys-u-until-lg`</th>
      <td>Visible</td>
      <td>Visible</td>
      <td>Visible</td>
      <td>Not visible</td>
      <td>Not visible</td>
    </tr>
    <tr>
      <th scope="row">`.ys-u-until-xl`</th>
      <td>Visible</td>
      <td>Visible</td>
      <td>Visible</td>
      <td>Visible</td>
      <td>Not visible</td>
    </tr>
  </tbody>
</table>

## Styling on min-width
<table>
  <thead>
    <tr>
      <th scope="col">↓ Class name / Min-width →</th>
      <th scope="col">< 576px</th>
      <th scope="col">576px</th>
      <th scope="col">768px</th>
      <th scope="col">992px</th>
      <th scope="col">1200px</th>
    <tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">`.ys-u-from-sm`</th>
      <td>Not visible</td>
      <td>Visible</td>
      <td>Visible</td>
      <td>Visible</td>
      <td>Visible</td>
    </tr>
    <tr>
      <th scope="row">`.ys-u-from-md`</th>
      <td>Not visible</td>
      <td>Not visible</td>
      <td>Visible</td>
      <td>Visible</td>
      <td>Visible</td>
    </tr>
    <tr>
      <th scope="row">`.ys-u-from-lg`</th>
      <td>Not visible</td>
      <td>Not visible</td>
      <td>Not visible</td>
      <td>Visible</td>
      <td>Visible</td>
    </tr>
    <tr>
      <th scope="row">`.ys-u-from-xl`</th>
      <td>Not visible</td>
      <td>Not visible</td>
      <td>Not visible</td>
      <td>Not visible</td>
      <td>Visible</td>
    </tr>
  </tbody>
</table>
