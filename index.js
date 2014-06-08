
/**
 * Module dependencies.
 */

var Token = require('grammarjs-token');
var value = Token.value;
var passthrough = Token.passthrough;

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Puncuation plugin.
 *
 * @api public
 */

function plugin() {
  return function(grammar){
    var rule = grammar.rule;

    /**
     * The `%` symbol for stemming.
     */

    rule('punctuation.percent')
      .match('%', value);

    /**
     * The `$` symbol for variables/functions.
     */

    rule('punctuation.dollar')
      .match('$', value);

    /**
     * The `@` symbol, for echoing output.
     */

    rule('punctuation.at')
      .match('@', value);

    /**
     * The `-` symbol, for suppressing error messages.
     */

    rule('punctuation.dash')
      .match('-', value);

    /**
     * Backslash.
     */

    rule('punctuation.backslash')
      .match('\\', value);

    /**
     * The `#` symbol for comments.
     */

    rule('punctuation.pound')
      .match('#', value);

    /**
     * Open parenthesis.
     */

    rule('punctuation.bracket.begin')
      .match('(', value);

    /**
     * Close parenthesis.
     */

    rule('punctuation.bracket.end')
      .match(')', value);

    /**
     * Open curly bracket.
     */

    rule('punctuation.bracket.curly.begin')
      .match('{', value);

    /**
     * Close curly bracket.
     */

    rule('punctuation.bracket.curly.end')
      .match('}', value);

    /**
     * Period.
     */

    rule('punctuation.period')
      .match('.', value);

    /**
     * Colon.
     */

    rule('punctuation.colon')
      .match(':', value);

    /**
     * Semicolon.
     */

    rule('punctuation.semicolon')
      .match(';', value);

    /**
     * Equal.
     */

    rule('punctuation.equal')
      .match('=', value);

    /**
     * Comma.
     */

    rule('punctuation.comma')
      .match(',', value);

    /**
     * New line.
     */

    rule('punctuation.newline')
      .match(/\n/, value);

    /**
     * Tab.
     */

    rule('punctuation.tab')
      .match(/\t/, value);

    function punctuation(name, pattern) {
      grammar.rule('punctuation.' + name).match(pattern, value);
    }
  };
}