var express = require('express');
var bodyParser = require('body-parser');
var md5 = require('md5');

var app = express();
app.listen(8080,function(){
    console.log('服务启动成功');
})
/**
 * 静态目录设置
 * 
 */
app.use(express.static(__dirname+'/static'));
/**
 * 自动解析post body体
 * application/json与application/x-www-form-urlencoded
 * 注意这是全局设置
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var registerServ = require('./service/register');
app.post('/register',function(req,res){
    
    registerServ.register(req.body).then(function(){
            res.send({code:1,msg:'恭喜注册成功'})
    }).catch(function(err){
        console.log('run in error',err);
        res.send({code:err.code,msg:err.msg})
    });
    
})