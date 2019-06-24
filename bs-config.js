'use strict';

module.exports = {
  server: {
      baseDir: './dist',
      middleware: {
          1: require('connect-history-api-fallback')({ index: '/model-viewer-demo/index.html', verbose: true })
      }
  }
};