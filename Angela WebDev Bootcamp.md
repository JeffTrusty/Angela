# Angela-Complete WebDev Bootcamp

## HTML Info

```HTML
<h1>This is a level 1 heading</h1>
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>

<!-- The <br> tag is to create a line break and is a self closing tag -->
<br>

<!-- The <hr> tag is to create a horizontal line
  It is a self closing tag
  It has additional attributes like:
  size = "number of pixels"
  noshade
  color
  width -->
<hr align = "center" size = "3" color = "navy" width = "50%" noshade>

<!-- Use <strong> or <em> to bold / italicize content -->

<!-- HTML elements (objects) can have multiple class values, but ID's can only have a single value -->

<!-- psudo-classes are used to identify object state (hover, active, etc.) -->

<!-- Use EMMET to speed coding.
The following creates a post form with a 4 option dropdown and a submit button -->
form:post>(select>opt[value=$]{#$$}*4)+btn:m

<!-- CSS hierarchy:
  HTML Tags
  Classes (can have multiple objects with the same class value)
  ID's (ID values need to be unique!) -->

<!-- CSS Targeting -->
<!-- HTML tag -->
body {
  background-color: red;
}
<!-- CLASS -->
.className {
  background-color: red;
}
<!-- ID -->
#idName {
  background-color: red;
}

<!-- psudo-class state -->
img:hover {
  background-color: gold;
}

<!-- CSS Display types -->
display: block <!-- Block display elements (h1-h6, p, div, forms, and lists) will take up the entire width of the display area -->
display: inline <!-- Inline display elements (span, img, a) will only take up the width needed to display them. However, you aren't allowed to set the elements width property -->
display: inline-block <!-- Inline-Block elements combine both and allow the elements to be displayed next to each other and allow the width to be modified -->
display: none <!-- Removes the element from the DOM -->
visibility: hidden <!-- makes the element invisible, but leaves it in the DOM and the area the element would take up -->

<!-- CSS Position -->
position: static <!-- All elements by default are static. The elements will flow one after the other using the space determined by the elements display type (see above). -->
position: relative <!-- By making an elements position relative, you can move the element within the DOM. However, it has no effect upon any of the other elements -->
position: absolute <!-- Absolute positioning is done against the elements parent element whether that be the DOM or some other element -->

<!-- Centering elements -->
<!-- Placing text-align: center in the parent element will center elements that don't contain a width property -->
<!-- margin: 0 auto 0 auto; will center an element that contains a width property -->
```

## Reference links

[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
[MDN => type:]()
