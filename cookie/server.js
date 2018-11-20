const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {

    const host = request.headers.host;
    console.log(host);
    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'UTF-8');
        if (host === 'a.com:8888') {
            response.writeHead(200, {
                'Content-Type': 'text/html',
                // 通过设置max-age和HttpOnly可以控制 cookie 的过期时间和是否允许 js调用和读取cookie
                'Set-Cookie': ['id=123; max-age=2', 'abc=456;HttpOnly']
            })
        }
        response.end(html);
    }

}).listen(8888);