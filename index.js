module.exports = {
    plugins: ['stylelint-order'],
    extends: [
        'stylelint-config-recommended',
        './identify-errors.js',
        './language-features.js',
        './code-style.js',
        'stylelint-config-recess-order',
    ],
    rules: {},
}
