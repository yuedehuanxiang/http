const http = require('http');
const fs = require('fs');
const zlib = require('zlib')

http.createServer(function (request, response) {
    if (request.url === '/') {
        const html = fs.readFileSync('test.html');
        response.writeHead(200, {
            'Content-Type': 'text/html', //这里一定要指定内容类型
            'Content-Encoding': 'gzip'
        })
        response.end(zlib.gzipSync(html));

    }

}).listen(8888);