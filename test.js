
var assert = require('assert');
var punc = require('./');
var Grammar = require('grammarjs-grammar');
var Parser = require('grammarjs-recursive-parser');
var fs = require('fs');

describe('punctuation', function(){
  it('should extend a new grammar', function(){
    var grammar = new Grammar('random');
    grammar.use(punc());
    var parser = new Parser(grammar);
  });
});

/**
 * Test helper.
 *
 * @api private
 */

function test(str, log) {
  return it(str, function(){
    assert.equal(str, compile(str, log));
  });
}

/**
 * Parse `str` to ast, then stringify back.
 *
 * @param {String} str
 * @return {String}
 */

function compile(str, log) {
  var ast = parser.parse(str);
  if (log) console.log(JSON.stringify(ast, null, 2));
  return stringify(ast);
}

/**
 * For testing, it should generate the original string.
 *
 * @param {Token} token
 * @api public
 */

function stringify(token) {
  if (!token) return '';
  var html = [];
  if (Array.isArray(token.content)) {
    token.content.forEach(function(child){
      html.push(stringify(child));
    });
  } else if (null != token.content) {
    html.push(stringify(token.content));
  } else {
    html.push(token);
  }

  return html.join('');
}