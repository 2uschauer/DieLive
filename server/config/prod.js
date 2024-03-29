'use strict'

module.exports = {
  ip: process.env.IP || '0.0.0.0',
  port: 443,
  httpPort: 80,
  logsPath: '/root/logs',
  ziker: {
    appIntranetPrefix: 'http://127.0.0.1:7001'
  },
  ceFilePath: '/etc/letsencrypt/live/www.die.live'
}
