<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Set Low Word

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Set the less significant 32 bits of a [double-precision floating-point number][ieee754].



<section class="usage">

## Usage

To use in Observable,

```javascript
setLowWord = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var setLowWord = require( 'path/to/vendor/umd/number-float64-base-set-low-word/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.setLowWord;
})();
</script>
```

#### setLowWord( x, low )

Sets the less significant 32 bits (lower order word) of a [double-precision floating-point number][ieee754] `x` to a bit sequence represented by an unsigned 32-bit integer `low`. The returned `double` will have the same more significant 32 bits (higher order word) as `x`.

```javascript
var low = 5 >>> 0; // => 00000000000000000000000000000101

var x = 3.14e201; // => 0 11010011100 01001000001011000011 10010011110010110101100010000010

var y = setLowWord( x, low ); // => 0 11010011100 01001000001011000011 00000000000000000000000000000101
// returns 3.139998651394392e+201
```

Setting the lower order bits of `NaN` or positive or negative `infinity` will return `NaN`, as `NaN` is [defined][ieee754] as a `double` whose exponent bit sequence is all ones and whose fraction can be any bit sequence **except** all zeros. Positive and negative `infinity` are [defined][ieee754] as `doubles` with an exponent bit sequence equal to all ones and a fraction equal to all zeros. Hence, changing the less significant bits of positive and negative `infinity` converts each value to `NaN`.

```javascript
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );

var low = 12345678;

var y = setLowWord( PINF, low );
// returns NaN

y = setLowWord( NINF, low );
// returns NaN

y = setLowWord( NaN, low );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var frac;
var exp;
var low;
var x;
var y;
var i;

// Generate a random double-precision floating-point number:
frac = randu() * 10.0;
exp = -round( randu() * 323.0 );
x = frac * pow( 10.0, exp );

// Replace the lower order word of `x` to generate new random numbers having the same higher order word...
for ( i = 0; i < 100; i++ ) {
    low = round( randu()*MAX_UINT32 );
    y = setLowWord( x, low );
    console.log( 'x: %d. new low word: %d. y: %d.', x, low, y );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-set-low-word.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-set-low-word

[test-image]: https://github.com/stdlib-js/number-float64-base-set-low-word/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-set-low-word/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-set-low-word?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-set-low-word.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-set-low-word/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-set-low-word/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
