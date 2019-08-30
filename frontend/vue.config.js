module.exports = {
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer: { 
      disableHostCheck: true,
      host: '0.0.0.0',
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:5000',
          ws: true,
          changeOrigin: true
        }
      }
    },
  }