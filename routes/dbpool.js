var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbPool = require('../common/dbpool');
var logger = require('../common/logger');

router.get('/', function(req, res, next) {
  logger.log('info', '%s %s://%s%s', req.method, req.protocol, req.headers['host'], req.originalUrl)

  dbPool.logStatus();
  dbPool.getConnection(function(err, conn) {
    if (err) {
      return next(err);
    }
    var sql = 'select now()';
    conn.query(sql, function(err, results) {
      conn.release();
      dbPool.logStatus();
      if (err) {
        return next(err);
      }
      res.send(results[0]);
    });
  });
});

module.exports = router;
