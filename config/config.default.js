/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  config.cors = {
    // * 允许所有域名访问
    origin: 'http://localhost:8001',
    // 允许的方法
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1647353155883_599'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig
  }
}
