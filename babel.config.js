module.exports = function (api) {
    api.cache(false);

    const presets = [
        '@babel/preset-env',
        ["@babel/preset-typescript", {
            isTSX: true,
            allExtensions: true
        }],
        [
            "@babel/preset-react",
            // {
            //     useBuiltIns: "entry",
            //     corejs: 3
            // }
        ],

    ];

    const plugins = [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        ["@babel/plugin-proposal-object-rest-spread", {
            "loose": true, "useBuiltIns": true
        }],
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                corejs: 3,
                "helpers": true,
                "regenerator": true,
                "useESModules": false,
                "version": "7.8.3"
            }
        ]
    ];

    return {
        presets,
        plugins
    };
};
