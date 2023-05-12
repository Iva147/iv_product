const path = require('path')
const { DefinePlugin } = require("webpack");

module.exports = {
  "stories": [
    "../../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "node": {
    // Use the Node.js version specified in your package.json file
    // (Note: this assumes that you've installed the required version of Node.js on your machine)
    "global": true,
    "crypto": true,
    "stream": true,
    "fs": "empty",
    "net": "empty",
    "tls": "empty",
    "child_process": "empty",
  },
  "webpackFinal": async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../../src"),
    ]

    config.module.rules = config.module.rules.map(rule => {
      if(/svg/.test(rule.test)) {
        return { ...rule, exclude: /\.svg$/i}
      }

      return rule
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    config.plugins.push(new DefinePlugin({
      __IS_DEV__: true
    }))

    return config;
  }
}