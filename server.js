var http = require('http');
var sockjs = require('sockjs');

var echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/0.3.4/sockjs.min.js' });
echo.on('connection', function(conn) {
  conn.on('data', function(message) {
      conn.write(message);
  });
  conn.on('close', function() {});
});

var server = http.createServer();
echo.installHandlers(server, {prefix:'/'});
server.listen(9999, '127.0.0.1');
