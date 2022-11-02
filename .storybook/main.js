const path = require('path')

module.exports = {
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  "webpackFinal": async (config) => {
    const alias = {
      components: path.resolve(__dirname, '../components'),
      shapes: path.resolve(__dirname, '../shapes'),
      lib: path.resolve(__dirname, '../lib'),
      styles: path.resolve(__dirname, '../styles'),
      public: path.resolve(__dirname, '../public'),
    }

    config.resolve.alias = { ...config.resolve.alias, ...alias }
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];

    return (config)
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/AppElements/**/*.stories.@(js|jsx|ts|tsx)",

  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}