// prettier.config.js
/**
 * @type {import('prettier').Config}
 * @see https://www.prettier.cn/docs/options.html
 */
module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  printWidth: 80,
  arrowParens: 'always',
  proseWrap: 'always',
  endOfLine: 'lf',
  experimentalTernaries: false,
  tabWidth: 2,
  useTabs: false,
  quoteProps: 'consistent',
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  jsxBracketSameLine: false,
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: false,
}