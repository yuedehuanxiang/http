const http = require('http');
const fs = require('fs');
const zlib = require('zlib')

http.createServer(function (request, response) {
    console.log(request.url);
    if (request.url === '/') {
        response.writeHead(301, {
            // 返回302指定location 可以将url转向别的地址,返回301是地址永久改变和302临时改变地址
            // 略有不同,这里注意返回302跳转url可能会在浏览器中留下缓存，此时就算改变了服务器返回的内容
            //浏览器如果不清楚清除缓存重新拿的话，也还是会301跳转别的链接，所以使用301要慎重使用
            'Location': '/new'
        });
        response.end();
    }

    if (request.url === '/new') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end('<div>this is content</div>')

    }



    if (request.url == '/favicon.ico') {
        let icon = fs.readFileSync('favicon.ico');
        response.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        response.end(icon)
    }

    /*
    if (request.url === '/') {
        const html = fs.readFileSync('test.html');
        response.writeHead(200, {
            'Content-Type': 'text/html', //这里一定要指定内容类型
            'Content-Encoding': 'gzip'
        })
        response.end(zlib.gzipSync(html));
    }
    */



}).listen(8888);