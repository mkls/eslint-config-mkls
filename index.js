module.exports = {
    "env": {
        "node": true
    },
    "parserOptions": {
        "sourceType": "script",
        "ecmaVersion": 6
    },
    // for detailed explanation of each rule see: http://eslint.org/docs/rules/<rule-name>
    "rules": {
        // jslint rules translated
        "func-style": ["warn", "declaration", { "allowArrowFunctions": true }],
        "no-bitwise": "warn",
        "curly": "warn",
        "eqeqeq": ["warn", "always", {"null": "ignore"}],
        "block-scoped-var": "warn",
        "no-extend-native": "warn",
        "indent": ["warn", 4],
        "no-use-before-define": ["warn", {
            "functions": false
        }],
        "complexity": ["warn", 10],
        "new-cap": ["warn"],
        "no-caller": "warn",
        "no-undef": "warn",
        "no-unused-vars": "warn",
        "quotes": ["warn", "single", {
            "avoidEscape": true
        }],
        "no-console": "warn",
        "no-debugger": "warn",
        "no-eval": "warn",
        "no-plusplus": "warn",

        // from a style guide
        "spaced-comment": "warn",
        "eol-last": "warn",
        "no-labels": ["warn", { "allowSwitch": true }],
        "no-cond-assign": ["warn", "always"],
        "no-new-wrappers": "warn",
        "no-dupe-keys": "warn",
        "no-redeclare": "warn",
        "no-empty": "warn",
        "no-fallthrough": "warn",
        "no-trailing-spaces": "warn",
        "no-unreachable": "warn",
        "no-unused-expressions": "warn",
        "brace-style": "warn",
        "radix": "warn",
        "semi": ["warn", "never"],
        "semi-spacing": "warn",
        "comma-spacing": "warn",
        "keyword-spacing": "warn",
        "space-infix-ops": "warn",

        // stylistic rules
        "max-len": ["warn", 120],
        "operator-linebreak": ["warn", "after"],
        "lines-around-comment": ["warn"],
        "one-var-declaration-per-line": "warn",
        "one-var": ["warn", "never"],
        "func-call-spacing": "warn",
        "space-before-function-paren": ["warn", {
            "anonymous": "always",
            "named": "never"
        }],
        "camelcase": "warn",
        "max-statements-per-line": "warn",
        "no-extra-parens": ["warn", "all", {
            "conditionalAssign": false,
            "nestedBinaryExpressions": false
        }],
        "space-in-parens": "warn",
        "space-unary-ops": "warn",
        "no-whitespace-before-property": "warn",
        "no-array-constructor": "warn",
        "no-new-object": "warn",
        "no-implied-eval": "warn",
        "no-new-func": "warn",

        "strict": ["warn", "never"],
        "func-names": ["warn", "never"],
        "max-statements": ["warn", 12],
        "max-lines": ["warn", 200],
        "default-case": "warn",
        "no-multi-spaces": "warn",
        "dot-location": ["warn", "property"],

        // eslint recommended rules
        "no-constant-condition": "warn",
        "no-control-regex": "warn",
        "no-dupe-args": "warn",
        "no-duplicate-case": "warn",
        "no-empty-character-class": "warn",
        "no-ex-assign": "warn",
        "no-extra-boolean-cast": "warn",
        "no-extra-semi": "warn",
        "no-func-assign": "warn",
        "no-inner-declarations": "warn",
        "no-invalid-regexp": "warn",
        "no-irregular-whitespace": "warn",
        "no-obj-calls": "warn",
        "no-regex-spaces": "warn",
        "no-sparse-arrays": "warn",
        "no-unexpected-multiline": "warn",
        "no-unsafe-finally": "warn",
        "use-isnan": "warn",
        "valid-typeof": "warn",
        "no-case-declarations": "warn",
        "no-empty-pattern": "warn",
        "no-octal": "warn",
        "no-self-assign": "warn",
        "no-unused-labels": "warn",
        "no-delete-var": "warn",
        "no-mixed-spaces-and-tabs": "warn"
    }
}
