#!/usr/bin/env node
'use strict';
const meow = require('meow');
const isFont = require('is-font');

const cli = meow(`
	Usage
	  $ is-font <filename>

	Example
	  $ is-font unicorns.woff2
	  { ext: 'woff2', mime: 'application/font-woff' }
`);

function init(filename) {
	const type = isFont(filename);

	if (!type) {
		console.error('Unrecognized font file');
		process.exit(65);
	}

	console.log(type);
}

if (cli.input.length === 0) {
	console.error('Specify a filename');
	process.exit(1);
}

init(cli.input[0]);
