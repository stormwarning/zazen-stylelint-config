module.exports = {
    rules: {
        // https://stylelint.io/user-guide/rules/#color-1
        'color-named': 'never',

        // https://stylelint.io/user-guide/rules/#number
        'number-max-precision': 7,

        // https://stylelint.io/user-guide/rules/#shorthand-property
        'shorthand-property-no-redundant-values': true,

        // https://stylelint.io/user-guide/rules/#value
        'value-no-vendor-prefix': true,

        // https://stylelint.io/user-guide/rules/#property-1
        'property-no-vendor-prefix': true,

        // https://stylelint.io/user-guide/rules/#declaration-block-1
        'declaration-block-single-line-max-declarations': 1,

        // https://stylelint.io/user-guide/rules/#selector-1
        'selector-max-empty-lines': 4,
        'selector-max-compound-selectors': 5,
        'selector-max-id': 0,

        // https://stylelint.io/user-guide/rules/#at-rule-1
        'at-rule-no-vendor-prefix': true,

        // https://stylelint.io/user-guide/rules/#general--sheet-1
        'max-nesting-depth': 3,
    },
}
