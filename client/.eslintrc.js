module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "eslint:recommended",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
        // enable additional rules
        "indent": [
            "error",
            4
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        // override default options for rules from base configurations
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "no-cond-assign": [
            "error",
            "always"
        ],
        // disable rules from base configurations
        "no-console": "off",
        "no-confusing-arrow": 0,
        "react/jsx-quotes": 0,
        "react/jsx-filename-extension": 0,
        "react/forbid-prop-types": 0,
        "react/display-name": 1,
        "react/prop-types": 0,
        "react/jsx-wrap-multilines": 0,
        "jsx-quotes": [
            2,
            "prefer-single"
        ],
        "no-extra-semi": 2,
        "no-unused-vars": 1,
        "import/no-unresolved": 0,
        "import/no-named-as-default": 0,
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "import/no-dynamic-require": 0,
        "import/no-named-as-default-member": 1,
    }
};
