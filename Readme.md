# element-collection

  Enumerable DOM Element Collection providing methods like find, select, reject, first, etc.

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
    tabs.select(e.target.hash)
  })
})

// Hide all .hidden elements
var hidden = ElementCollection('.hidden')
hidden.each(hide)

function hide(el) {
  el.style.display = 'none'
}
```

## API

  ElementCollection(selector Array|String)

  Takes a selector or an Arrayish (e.g. `NodeList`), and returns a new ElementCollection with [enumerable](https://github.com/component/enumerable) methods.

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
