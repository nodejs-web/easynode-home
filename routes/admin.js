/*
 * admin 路由
 */

var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res) {
    res.render('admin/index', { title: '后台首页' });
});

/* GET user page */
router.get('/users',function(req, res){
   res.render('system/user/index',{
       title :'用户管理'
   });
});

router.get('addUser', function(req, res){
   //添加用户

});

/* POST user data */
router.post('addUser', function(req, res, next){
   var body = req.body;

    console.log(body.username);
    console.log(body.phone);
    console.log(body.email);
    return res.redirect('back');
});

/* GET user edit */
router.get('/editUser', function(req, res, next){

});

/* POST user edit */
router.post('/editUser', function(req, res, next){

});

router.get('')
/* GET login page. */
router.get('/login', function(req, res){
    res.render('admin/login',{title: '后台登陆'});
});

/* POST login data */
router.post('/login', function(req, res){
    var body = req.body;
    var username = body.username;
    var password = body.password;

    console.log(username);
    console.log(password);
    //login
    return res.redirect('/admin');
});

/* GET forget page*/
router.get('/forget', function(req, res){
   res.render('admin/forget',{
       title : '找回密码'
   });
});

/* POST email data */
router.post('/forget', function(req, res, next){
   var body  = req.body;
    console.log(body.email);
    //收到邮箱地址，进而可以发送邮件

});
/* GET users page */
router.get('/users', function(req, res){
    res.render('admin/users/list', {
        title : '用户管理',
        user  : req.session.user  //用户
    });
});

/* GET */
router.get('/logout', function(req, res){
    res.redirect('/login');
});
module.exports = router;
