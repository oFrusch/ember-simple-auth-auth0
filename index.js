'use strict';

const webpack = require('webpack');

module.exports = {
  name: 'ember-simple-auth-auth0',
  options: {
    babel: {
      plugins: [ require.resolve('ember-auto-import/babel-plugin') ]
    },
    autoImport:{
      webpack: {
        plugins: [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
          })
        ],
        node: {
          global: true
        }
      }
    }
  }
};
