module.exports = {
    rules: {
        // https://stylelint.io/user-guide/rules/#color
        'color-no-invalid-hex': true,

        // https://stylelint.io/user-guide/rules/#function
        'function-calc-no-unspaced-operator': true,

        // https://stylelint.io/user-guide/rules/#string
        'string-no-newline': true,

        // https://stylelint.io/user-guide/rules/#unit
        'unit-no-unknown': true,

        // https://stylelint.io/user-guide/rules/#property
        'property-no-unknown': true,

        // https://stylelint.io/user-guide/rules/#declaration-block
        'declaration-block-no-shorthand-property-overrides': true,

        // https://stylelint.io/user-guide/rules/#block
        'block-no-empty': true,

        // https://stylelint.io/user-guide/rules/#selector
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,

        // https://stylelint.io/user-guide/rules/#comment
        'comment-no-empty': true,

        // https://stylelint.io/user-guide/rules/#general--sheet
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
    },
}
