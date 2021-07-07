//配置具体的修改规则
const CracoLessPlugin = require('craco-less');

/* craco.config.js */
module.exports = {
    // ...plugins 插件  
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': 'orange' },
                javascriptEnabled: true,//允许修改底层的less
              },
            },
          },
        },
      ],
  };