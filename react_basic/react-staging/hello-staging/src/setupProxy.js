const { createProxyMiddleware } = require('http-proxy-middleware');//1.0版本后更新了对模块引用的要求

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{
            target:'http://localhost:5000',
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        })
    )
}