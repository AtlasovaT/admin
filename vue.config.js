const path = require('path');

module.exports = {
  "publicPath": '/',
  "assetsDir": "assets",
  "devServer": {
    "proxy": "http://api-factory.simbirsoft1.com"
  },
  "transpileDependencies": [
    "vuetify"
  ],
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        actions: path.resolve(__dirname, 'src/store/actions'),
        utils: path.resolve(__dirname, 'src/utils')
      }
    }
  }
};
