const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html' //这里一定要指定内容类型
        })
        response.end(html);
    }
    if (request.url === '/script.js') {

        const etag = request.headers['if-none-match'];
        if (etag === '777') {
            response.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=20000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            });
            response.end('789')
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=20000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            });
            response.end('console.log("script11")')
        }

    }


}).listen(8888);