# hex-rgbs

Convert hex color codes to rgba or rgb. The alpha value can be a string.

Why the 's'? Well, common npm names were taken. And the unique feature of this module is being able to use a string for the alpha value. Hence having an 's' where the 'a' would normally be in 'rgba'.

## Install

```
# npm || yarn
$ npm install hex-rgbs
$ yarn add hex-rgbs
```

## Usage

```js
const hexRgbs = require('hex-rgbs');

hexRgbs('#ffffff');
hexRgbs('ffffff');
hexRgbs('#fff');
hexRgbs('fff');
// rgb(255, 255, 255)

hexRgbs('#ffffff', 0.5);
hexRgbs('#ffffff', '0.5');
// rgba(255, 255, 255, 0.5)

hexRgbs('#ffffff', 'var(--tw-bg-opacity)');
// rgba(255, 255, 255, var(--tw-bg-opacity))
```