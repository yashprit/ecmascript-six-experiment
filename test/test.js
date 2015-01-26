/*global describe, it */
'use strict';
var assert = require('assert');
var ecmascriptSixExperiment = require('../');

describe('ecmascript-six-experiment node module', function () {
  it('must have at least one test', function () {
    ecmascriptSixExperiment();
    assert(false, 'I was too lazy to write any tests. Shame on me.');
  });
});
