
# element-collection

  Enumerable Collection of DOM Elements

## Installation

    $ component install timoxley/element-collection

## Example

```js
var nav = ElementCollection('.nav a') // < for example.

// Select first nav item:
var firstItem = nav.first()

// Find nav item corresponding to current document.location.hash
var selectedItem = nav.find(function(el) {
  el.hash === document.location.hash
})

// attach click listeners to nav's links
nav.each(function(link) {
  link.addEventListener('click', function(e) {
    tabs.select(e.target.hash + '-page')
  })
})
```

## API

  ElementCollection(selector Array|String)

  Take a selector String or an Array/array-like (e.g. `NodeList`), and return a new ElementCollection with [enumerable]() methods.

* .each()
* .map()
* .select()
* .unique()
* .reject()
* .compact()
* .find()
* .findLast()
* .none()
* .any()
* .count()
* .indexOf()
* .has()
* .grep()
* .reduce()
* .max()
* .sum()
* .first()
* .last()
* .inGroupsOf()
* .at()
* .value()

## License

  MIT
