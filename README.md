# Ajax

[![Join the chat at https://gitter.im/darlanalves/ajax](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/darlanalves/ajax?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> Ajax module in Vanilla JS

<p align="center">
  <img src="ajax-logo.png" alt="Ajax" />
</p>

[![Build Status][travis-image]][travis-url]
[![Coveralls Coverage Status][coverage-image]][coverage-url]
[![Code Climate Coverage][codeclimate-coverage-image]][codeclimate-coverage-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![License][license-image]][license-url]
[![CONTRIBUTING][contributing-image]][contributing-url]

You can use this module with _AMD_, _CommonJS_ or just like a method of `window` object!

## Installation

### Bower

You can install via bower:

```sh
bower install ajax
```

### Manual installation

Just download `dist/ajax.min.js` file, and add `dist/ajax.min.js` on your HTML file:

```html
<script src="js/ajax.min.js"></script>
```

### CommonJS (via NPM)

```sh
npm i --save @fdaciuk/ajax
```

## Usage

### AMD

```js
define([ 'Ajax' ], function( Ajax ) {
  var ajax = new Ajax();
  ...
});
```

### CommonJS

```js
var Ajax = require( '@fdaciuk/ajax' );
var ajax = new Ajax();
...
```

#### Method of `window` object

```js
var ajax = new window.Ajax();
```

or

```js
var ajax = new Ajax();
```

Enjoy ;)

## Methods

### `get(url)`

> Get data as a JSON object.

```js
var ajax = new Ajax();
ajax.get( '/api/users' );
```

### `post(url, [ data ])`

> Save a new register.

```js
var ajax = new Ajax();
ajax.post( '/api/users', { data: 'value' });
```

### `put(url, [ data ])`

> Upgrade part of a register.

```js
var ajax = new Ajax();
ajax.put( '/api/users', { slug: 'john' });
```

### `delete(url, [ data ])`

> Delete a register.

```js
var ajax = new Ajax();
ajax.delete( '/api/users', { id: 1 });
```

## Return methods

### `done(response, xhrObject)`

> Promise that returns if the request was successful.

```js
var ajax = new Ajax();
ajax.get( '/api/users' ).done(function( response, xhr ) {
  // Do something
});
```

### `error(response, xhrObject)`

> Promise that returns if the request has an error.

```js
var ajax = new Ajax();
ajax.post( '/api/users', { slug: 'john' }).error(function( response, xhr ) {
  // Do something
});
```

### `always(response, xhrObject)`

> That promise always returns, independent if the status is `done` or `error`.

```js
var ajax = new Ajax();
ajax.post( '/api/users', { slug: 'john' }).always(function( response, xhr ) {
  // Do something
});
```

## Contributing

Check [CONTRIBUTING.md][contributing-url]

## Code coverage and Statistics

<https://github.com/reportz/ajax>

## License

[MIT][license-url] © Fernando Daciuk

[travis-image]: https://img.shields.io/travis/fdaciuk/ajax.svg?style=flat-square
[travis-url]: https://travis-ci.org/fdaciuk/ajax
[coverage-image]: https://img.shields.io/coveralls/fdaciuk/ajax/master.svg?style=flat-square
[coverage-url]: https://coveralls.io/r/fdaciuk/ajax?branch=master
[codeclimate-coverage-image]: https://img.shields.io/codeclimate/coverage/github/fdaciuk/ajax.svg?style=flat-square
[codeclimate-coverage-url]: https://codeclimate.com/github/fdaciuk/ajax
[codeclimate-image]: https://img.shields.io/codeclimate/github/fdaciuk/ajax.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/fdaciuk/ajax
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md
[contributing-image]: https://img.shields.io/badge/fdaciuk%2Fajax-CONTRIBUTE-orange.svg?style=flat-square
[contributing-url]: CONTRIBUTING.md
