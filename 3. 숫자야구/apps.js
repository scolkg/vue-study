var express = require('express');
var path = require('path');
var fs = require('fs') // 파일 로드 사용

var routes = require('./dist/app');

var app = express();

app.use('/dist', express.static('dist'));


app.get('/', function(req, res){
    fs.readFile('NumberBaseball.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

app.listen(80, function(){
    console.log('Example app listening on port 80');
});