module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "script"
    },
    "rules": {
        "camelcase": "warn",
        "indent": ["error", 4],
        "no-mixed-operators": "warn",
        "no-nested-ternary": "error",
        "no-whitespace-before-property": "error",
        "arrow-spacing": "error",
        "no-var": "error",
        "prefer-arrow-callback": "error",
    }
};