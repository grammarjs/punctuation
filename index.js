
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
      .match('%');

    /**
     * The `$` symbol for variables/functions.
     */

    rule('punctuation.dollar')
      .match('$');

    /**
     * The `@` symbol, for echoing output.
     */

    rule('punctuation.at')
      .match('@');

    /**
     * The `-` symbol, for suppressing error messages.
     */

    rule('punctuation.dash')
      .match('-');

    /**
     * Backslash.
     */

    rule('punctuation.backslash')
      .match('\\');

    /**
     * The `#` symbol for comments.
     */

    rule('punctuation.pound')
      .match('#');

    /**
     * Open parenthesis.
     */

    rule('punctuation.bracket.begin')
      .match('(');

    /**
     * Close parenthesis.
     */

    rule('punctuation.bracket.end')
      .match(')');

    /**
     * Open curly bracket.
     */

    rule('punctuation.bracket.curly.begin')
      .match('{');

    /**
     * Close curly bracket.
     */

    rule('punctuation.bracket.curly.end')
      .match('}');

    /**
     * Open curly bracket.
     */

    rule('punctuation.bracket.square.begin')
      .match('[');

    /**
     * Close curly bracket.
     */

    rule('punctuation.bracket.square.end')
      .match(']');

    /**
     * Period.
     */

    rule('punctuation.period')
      .match('.');

    /**
     * Colon.
     */

    rule('punctuation.colon')
      .match(':');

    /**
     * Semicolon.
     */

    rule('punctuation.semicolon')
      .match(';');

    /**
     * Comma.
     */

    rule('punctuation.comma')
      .match(',');

    /**
     * Equal.
     */

    rule('punctuation.equal')
      .match('=');

    /**
     * New line.
     */

    rule('punctuation.whitespace.newline')
      .match(/\n/);

    /**
     * Tab.
     */

    rule('punctuation.whitespace.tab')
      .match(/\t/);

    /**
     * Separator / Space
     */

    rule('punctuation.whitespace.separator')
      .match(/[\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/);

    /**
     * Line terminator.
     */

    rule('punctuation.whitespace.line.terminator')
      .match(/[\n\r\u2028\u2029]/);

    /**
     * Line terminator sequence.
     */

    rule('punctuation.whitespace.line.terminator-sequence')
      .match(
        '\n')
      .match(
        '\r\n')
      .match(
        '\r')
      .match(
        '\u2028')
      .match(
        '\u2029');

    /**
     * Backslash.
     */

    rule('punctuation.backslash')
      .match("\\");
    
    rule('punctuation.whitespace.multiline')
      .match(
        ':punctuation.whitespace.multiline.character*');

    rule('punctuation.whitespace.multiline.character')
      .match(
        ':punctuation.whitespace')
      .match(
        ':punctuation.whitespace.line.terminator-sequence')
      .match(
        ':comment');

    rule(':punctuation.whitespace.simple')
      .match(':punctuation.whitespace.simple.character*');

    rule('punctuation.whitespace.simple.character')
      .match(
        ':punctuation.whitespace')
      .match(
        ':comment.multiline.no-line-terminator');

    rule('punctuation.whitespace.eos')
      .match(
        ':punctuation.whitespace.multiline',
        ':punctuation.semicolon')
      .match(
        ':punctuation.whitespace.simple',
        ':SingleLinecomment?',
        ':punctuation.whitespace.line.terminator-sequence')
      .match(
        ':punctuation.whitespace.simple',
        '&:punctuation.bracket.square.end')
      .match(
        ':punctuation.whitespace.multiline',
        ':punctuation.whitespace.eof');

    rule('punctuation.whitespace.eof')
      .match(
        '!:punctuation.period');

    /**
     * Helper.
     */

    function punctuation(name, pattern) {
      grammar.rule('punctuation.' + name).match(pattern);
    }
  };
}