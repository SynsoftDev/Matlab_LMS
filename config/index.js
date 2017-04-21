// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

// proxy all /api/ requests to backend :3000
module.exports = {
  build: {
    env: require('./prod.env'),
    // index: path.resolve(__dirname, '../dist/index.html'),
    // assetsRoot: path.resolve(__dirname, '../dist'),
    index: path.resolve(__dirname, '../../public/index.html'),
    assetsRoot: path.resolve(__dirname, '../../public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    env: require('./dev.env'),
    port: 1341,
    proxyTable: {
      '/api/': 'http://localhost:3000'
    }
  }
}
