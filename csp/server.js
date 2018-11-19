const http = require('http');
const fs = require('fs');
const zlib = require('zlib')

http.createServer(function (request, response) {
    console.log(request.url);
    if (request.url === '/') {
        const html = fs.readFileSync('test.html');
        response.writeHead(200, {
            'Content-Type': 'text/html', //这里一定要指定内容类型
            // 限制页面src 和 form表单提交地址只能在本域名内
            'Content-Security-Policy': 'default-src \'self\'; form-action \'self\' '
        })
        response.end(html);
    } else {
        response.writeHead(200, {
            'Content-Type': 'application/javascript',
            // 'Content-Security-Policy': 'default-src http: https'
        })
        response.end('console.log("this is js")');
    }

    if (request.url == '/favicon.ico') {
        let icon = fs.readFileSync('favicon.ico');
        response.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        response.end(icon);
    }

}).listen(8888);