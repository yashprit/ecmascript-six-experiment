#!/usr/bin/env node
'use strict';
var meow = require('meow');
var ecmascriptSixExperiment = require('./');

var cli = meow({
  help: [
    'Usage',
    '  ecmascript-six-experiment <input>',
    '',
    'Example',
    '  ecmascript-six-experiment Unicorn'
  ].join('\n')
});

ecmascriptSixExperiment(cli.input[0]);
