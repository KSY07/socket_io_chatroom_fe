const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/**', {
      target: 'http://172.16.10.56:8080',
      changeOrigin: true,
    }),
  );
};