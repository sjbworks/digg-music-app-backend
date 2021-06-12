"use strict";
module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2021,
    },
    rules: {},
};