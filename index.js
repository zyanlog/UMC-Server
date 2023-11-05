var http = require('http');

var server = http.createServer();

var host = '172.30.1.42';
var port = 3000;
server.listen(port, host, 50000, function() {
    console.log('웹서버가 실행되었습니다. ->' + host + ":" + port);
});