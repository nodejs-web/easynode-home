/**
 *  服务路由
 *  所有相应均适用JSON
 */
var express = require('express');
var router  = express.Router();

/* GET service info */
router.get('/', function(req, res, next){
   res.send(JSON.stringify({
       version:"0.0.1",
       host:'www.cnode.com',
       interfaces:[
           {
               name:'授权登录',
               path:'/service/auth',
               input:'',
               output:'true/false(boolean)'
           },
           {
               name:'发布教材',
               path:'/service/publish',
               input:'?type=[1:book,2:ebook,3:tech]',
               output:'url(string, 发布教材的地址'
           }
       ]
   }));
});
/* GET OAUTH */
router.get('/auth',function(req, res, next){
    return res.send(JSON.stringify({aid:'',uid:'',flag:true}));
});

//开放接口
module.exports = router;