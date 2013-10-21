# mapify

  Turns any function into an array mapping

## Installation

  Install with [component(1)](http://component.io):

    $ component install bredele/mapify

## Usage

```js
var mapify = require('mapify');
var square = mapify(function(n){return n * n;});

square([1,2,3]);
// [1,4,9]

```

Mapper get nicer when use with [get](https://github.com/timoxley/get).

```js
mapify(get('name'))([
	{name:'olivier'},
	{name:'amy'}
]);
// ['olivier', 'amy']

```

## License

  MIT
