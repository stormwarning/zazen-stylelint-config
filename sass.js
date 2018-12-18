module.exports = {
    plugins: ['stylelint-scss'],
    rules: {
        // https://github.com/kristerkari/stylelint-scss#-extend
        'scss/at-extend-no-missing-placeholder': true,

        // https://github.com/kristerkari/stylelint-scss#-rule
        'scss/at-rule-no-unknown': true,

        // https://github.com/kristerkari/stylelint-scss#-variable
        'scss/dollar-variable-colon-space-after': 'at-least-one-space',
        'scss/dollar-variable-colon-space-before': 'never',

        // https://github.com/kristerkari/stylelint-scss#declaration
        'scss/declaration-nested-properties': 'never',
        'scss/declaration-nested-properties-no-divided-groups': true,

        // https://github.com/kristerkari/stylelint-scss#selector
        'scss/selector-no-redundant-nesting-selector': true,

        // Possible errors
        'at-rule-no-unknown': null,
        'no-descending-specificity': null,

        // Code style
        'block-closing-brace-newline-after': [
            'always',
            {
                ignoreAtRules: ['if', 'elseif', 'else'],
            },
        ],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: [
                    'if',
                    'elseif',
                    'else',
                    'each',
                    'include',
                    'import',
                    'return',
                ],
            },
        ],
    },
}
