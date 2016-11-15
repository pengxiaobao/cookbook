'use strict';
// 得到 webpack
const webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {

  // 开发环节添加source-map
  if (process.env.NODE_ENV === 'development') {
    webpackConfig.devtool = 'source-map';
  }

  // atpl  loader
  webpackConfig.module.loaders.push({test: /\.atpl$/, loader: 'atpl'});
  // HTML 中可以使用 ejs 语法，一些通用占位符可以定义在这里
  webpackConfig.module.loaders.push({test: /\.html?$/, loader: 'ejs-html'});
  webpackConfig.ejsHtml = {
    antBridgeVersion: '1.1.1'
  };

  const define = {
    "default": {
      'GET_JSON_MOCK': false
    },
    "test": {
      'GET_JSON_MOCK': false
    },
    "prod": {
      "GET_JSON_MOCK": false
    },
    "mock": {
      'GET_JSON_MOCK': true
    }
  };
  let definePluginOptionKey = define[process.env.NODE_ENV] ? process.env.NODE_ENV : define['default'] ? 'default' : '';
  let defineContent;
  if (definePluginOptionKey) {
    defineContent = define[definePluginOptionKey];

    if (typeof defineContent === 'object') {
      for (let i in defineContent) {
        if (typeof defineContent[i] === 'string' || typeof defineContent[i] === 'object') {
          defineContent[i] = JSON.stringify(defineContent[i]);
        }
      }
    }
    webpackConfig.plugins.push(
      new webpack.DefinePlugin(defineContent)
    )

  }


  webpackConfig.plugins.some(function (plugin, i) {
    if (plugin instanceof webpack.optimize.CommonsChunkPlugin) {
      webpackConfig.plugins.splice(i, 1, new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        // minChunks: 2 如果对项目的common提取需要精确,可以控制设置这个值
      }));

      return true;
    }
  });

  // 返回 webpack 配置对象
  return webpackConfig;
};
