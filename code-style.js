module.exports = {
    rules: {
        // https://stylelint.io/user-guide/rules/#color-2
        'color-hex-case': 'lower',

        // https://stylelint.io/user-guide/rules/#function-2
        'function-name-case': 'lower',

        // https://stylelint.io/user-guide/rules/#number-1
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,

        // https://stylelint.io/user-guide/rules/#string-1
        'string-quotes': 'single',

        // https://stylelint.io/user-guide/rules/#length
        'length-zero-no-unit': true,

        // https://stylelint.io/user-guide/rules/#unit-2
        'unit-case': 'lower',

        // https://stylelint.io/user-guide/rules/#value-list
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',

        // https://stylelint.io/user-guide/rules/#property-2
        'property-case': 'lower',

        // https://stylelint.io/user-guide/rules/#declaration-1
        'declaration-bang-space-after': 'never',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',

        // https://stylelint.io/user-guide/rules/#declaration-block-2
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',

        // https://stylelint.io/user-guide/rules/#block-1
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',

        // https://stylelint.io/user-guide/rules/#selector-2
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',

        // https://stylelint.io/user-guide/rules/#media-feature-2
        'media-feature-name-case': 'lower',

        // https://stylelint.io/user-guide/rules/#at-rule-2
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',

        // https://stylelint.io/user-guide/rules/#comment-2
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'stylelint-commands'],
            },
        ],
        'comment-whitespace-inside': 'always',

        // https://stylelint.io/user-guide/rules/#general--sheet-2
        'max-empty-lines': 4,
    },
}
