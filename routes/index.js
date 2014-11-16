var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home/index', {
    title: '网站首页',
    user:'爱好者'

  });
});

/* GET login page */
router.get('/login', function(req, res){
  res.render('home/login', {
    title: '用户登陆',
    user:'null'
  });
});

/* GET forget page */
router.get('/forget', function(req, res){
  res.render('home/forget', {
    title:'忘记密码',
    user:'null'
  });
});

router.post('/forget', function(req, res, next){
  console.log(req.body);
  res.render('home/notice', {
    title:'找回密码',
    user:'null'
  });
});

/* GET regist page */
router.get('/register', function(req, res){
  res.render('home/register', {
    title:'用户注册',
    user:'null'
  });
});

/* GET search page */
router.get('/search', function(req, res, next){
  res.render('home/search', {
    title:'全站搜索',
    user:'null'
  });
});

/* GET tutorial page */
router.get('/tutorials', function(req, res, next){
  res.render('home/tutorials', {
    title:'技术教程',
    user:'null'
  });
});


/* GET forum page */
router.get('/forum', function(req, res, next){
  res.render('home/forum', {
    title:'专题论坛',
    user:'null'
  });
});

/* GET material page */
router.get('/material', function(req, res, next){
  res.render('home/cases', {
    title:' 实战案例',
    user:'null'
  });
});
/* POST login data */
router.post('/login', function(req, res, next){
  var body = req.body;
  var username = body.account;
  var password = body.password;

  console.log(body);
  res.redirect('/');
});

/* POST register data */
router.post('/register', function(req, res, next){
  var body = req.body;
  var username = body.account;
  var password = body.password;
  var phone    = body.phone;
  var email    = body.email;

  console.log(body);
  res.redirect('/');
});

/*POST forget data */
router.post('/forget', function(req, res, next){
  var body = req.body;
  var account = body.account;
  var phone   = body.phone;
  var email   = body.email;

  console.log(body);
  res.redirect('/');
});

/* GET info style */
router.get('/info', function(req, res, next){
  res.render('home/info',{
    title:'邮箱注册',
    user:'null'
  });
});

/* GET weibo style */
//router.get('/weibo', function(req, res, next){
//  res.render('home/weibo',{
//    title:'微博注册',
//    user:'null'
//  });
//});

/* GET mobile style */
//router.get('/mobile', function(req, res, next){
//  res.render('home/mobile',{
//    title:'手机注册',
//    user:'null'
//  });
//});

/* GET data page */
router.get('/data', function(req, res, next){
  res.render('home/data',{
    title:'资源下载',
    user:'爱国者'
  });
});


/* GET forum page */
router.get('/forum', function(req, res,next){
  res.render('home/forum',{
    title:'专题论坛',
    user:'爱国者'
  });
});

/* GET cases page */
router.get('/cases', function(req, res, next){
  res.render('home/cases',{
    title:'实战案例',
    user:'爱国者'
  });
});

/* GET profile page */
router.get('/profile/*', function(req, res, next){
  //get the user, so the account must unique
  var user = req.params['0'];
  console.log(user);

  res.render('home/profile', {
    title:'个人中心',
    user:'爱国者'
    /* get from database */
    //data: data,
  });
});

/* GET profile page */
router.get('/baseInfo', function(req, res, next){
  res.render('home/baseInfo', {
    title:'基本信息',
    user:'爱国者'
  });
});

router.post('/changeInfo', function(req, res, next){
  console.log(req.body);
  res.redirect('/baseInfo');
});

router.get('/loginSafe', function(req, res, next){
  res.render('home/loginSafe', {
    title:'账号保护',
    user:'爱国者'
  });
});


router.post('/changePwd', function(req, res,next){
  console.log(req.body);
  res.redirect('/loginSafe');
});

router.get('/pushCase', function(req, res, next){
  res.render('home/pushCase', {
    title:'发布案例',
    user:'爱国者'
  });
});

router.get('/pushTour', function(req, res, next){
  res.render('home/pushTour', {
    title:'发布教程',
    user:'爱国者'
  });
});

router.get('/pushData', function(req, res, next){
  res.render('home/pushData', {
    title:'发布资源',
    user:'爱国者'
  });
});


router.get('/logout', function(req, res, next){
  res.render('home/index', {
    title:'发布资源',
    user:'爱国者'
  });
});

router.get('/feedback', function(req, res, next){
  res.render('home/feedback', {
    title:'意见反馈',
    user:'爱国者'
  });
});


router.post('/feedback', function(req, res,next){
  console.log(req.body);
  res.redirect('/');
});
/* POST search data */
router.post('/search', function(req, res, next){
  var search = req.body.search;

  console.log(search);
  res.render('home/search', {
    title:'搜索结果',
    user:'null',
    results:''     //搜索到的结果，以百度样式展示
  });
});
module.exports = router;
