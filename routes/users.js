var express = require('express');
var router = express.Router();

var logger = require('../common/logger');

/* GET users listing. */
router.get('/', function(req, res, next) {
  logger.log('debug', 'method: %s', req.method);
  logger.log('info', 'protocol: %s', req.protocol);
  logger.log('warn', 'host: %s', req.headers['host']);
  logger.log('error', 'originalUrl: %s', req.originalUrl);
  logger.log('debug', 'baseUrl: %s', req.baseUrl);
  logger.log('debug', 'url: %s', req.url);
  logger.log('debug', 'query: %j', req.query, {});
  logger.log('debug', 'range: %s', req.headers['range']);

  logger.log('info', '%s %s://%s%s', req.method, req.protocol, req.headers['host'], req.originalUrl)

  res.send('respond with a resource');
});

module.exports = router;
