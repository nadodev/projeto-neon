module.exports = {
    presets: [
        [
            "@babel/env",
            {
                targets: {
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                },
            },
        ],
        [ "minify", {
            builtIns: false,
            evaluate: false,
            mangle: false,
        } ],
    ],

    "compact": true,

    //"plugins": ["transform-remove-console"],

    comments: false,
};
