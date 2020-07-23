module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-declaration-use-variable'],
  rules: {
    'no-descending-specificity': null,
    'declaration-colon-newline-after': null,
    'selector-descendant-combinator-no-non-space': null,
    'value-list-comma-newline-after': null,
    indentation: null,
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['composes', '--font-family'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['range-thumb', 'range-track'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import', 'global', 'local'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with', 'text-remove-gap'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value', 'for', 'mixin', 'define-mixin', 'mixin-content'],
      },
    ],
    'sh-waqar/declaration-use-variable': [['/color/', { ignoreValues: ['currentColor'] }]],
  },
  ignoreFiles: ['./node_modules/**/*.css', './dist/**'],
}
