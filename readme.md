# is-font-cli [![Build Status](https://travis-ci.org/awcross/is-font-cli.svg?branch=master)](https://travis-ci.org/awcross/is-font-cli) [![Coverage Status](https://coveralls.io/repos/github/awcross/is-font-cli/badge.svg?branch=master)](https://coveralls.io/github/awcross/is-font-cli?branch=master)

> Detect if a file is a font


## Install

```
$ npm install --save is-font-cli
```


## Usage

```js
const isFontCli = require('is-font-cli');

isFontCli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### isFontCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global is-font-cli
```

```
$ is-font-cli --help

  Usage
    is-font-cli [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ is-font-cli
    unicorns & rainbows
    $ is-font-cli ponies
    ponies & rainbows
```


## License

MIT © [Alex Cross](http://alexcross.io)
