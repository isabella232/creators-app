const path = require('path')
var webpack = require('webpack');

module.exports = {
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  "webpackFinal": async (config) => {
    const alias = {
      components: path.resolve(__dirname, '../src/components'),
      styles: path.resolve(__dirname, '../src/styles'),
      public: path.resolve(__dirname, '../src/public'),
      images: path.resolve(__dirname, '../src/public/images'),
      fonts: path.resolve(__dirname, '../src/public/fonts'),
      hooks: path.resolve(__dirname, '../src/hooks')

    }

    config.resolve.alias = { ...config.resolve.alias, ...alias }
    config.resolve.roots = [
      path.resolve(__dirname, '../src/public'),
      '../node_modules',
    ];

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: [],
        path: '/',
        loader: 'default',
      }),
    }));

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              presets: [
                require("@brave/leo/build/tailwind")
              ],
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ]
    })

    return (config)
  },
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
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