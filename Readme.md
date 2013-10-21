
# mapper

  Turns any function into an array mapping

## Installation

  Install with [component(1)](http://component.io):

    $ component install bredele/mapper

## Usage

```js
var mapper = require('mapper');
var square = mapper(function(n){return n * n;});

square([1,2,3]);
// [1,4,9]

```


## License

  MIT
