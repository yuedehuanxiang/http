const http = require('http');

http.createServer(function (request, response) {

    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Test-Cors', // 自定义的请求头在跨域时 也是不允许的，需要设置
        'Access-Control-Allow-Methods': 'POST,PUT,Delete', //跨域请求时，PUT,Delete 这类请求是是不允许的
        'Access-Control-Max-Age': '1000' // 在1000s之内不用再发送预请求
    })
    response.end('456');

}).listen(8887);