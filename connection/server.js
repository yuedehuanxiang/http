const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    const html = fs.readFileSync('test.html', 'utf8');
    const img = fs.readFileSync('1.jpg');
    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Connection': 'close' // 默认是keep-alive 长连接
        });
        response.end(html);
    } else {
        response.writeHead(200, {
            'Content-Type': 'image/jpg',
            'Connection': 'close' // 默认是keep-alive 长连接
        });
        response.end(img);
    }

}).listen(8888);