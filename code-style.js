module.exports = {
    rules: {
        'color-hex-case': 'lower',

        'function-name-case': 'lower',

        'number-leading-zero': 'always',

        'length-zero-no-unit': true,

        'unit-case': 'lower',

        'value-keyword-case': 'lower',

        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,

        'property-case': 'lower',

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',

        'declaration-block-trailing-semicolon': 'always',

        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',

        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-element-case': 'lower',
        'selector-type-case': 'lower',

        'media-feature-name-case': 'lower',

        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',

        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'stylelint-commands'],
            },
        ],
        'comment-whitespace-inside': 'always',

        'max-empty-lines': 4,
    },
}
