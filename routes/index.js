var express = require('express');
var router = express.Router();







/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/login', function (req, res, next) {
    //var user = req.body;
    console.log(req.body);
    res.render('login/login', {title: '登录'});

});

router.get('/reg', function (req, res, next) {
    //var user = req.body;
    console.log(req.body);
    res.render('reg/reg', {title: '注册'});

});


router.post('/login', function (req, res, next) {
    var user = req.body;
    try {
        new Model("user")(user).save(function (err, doc) {
            if (err) {
                next(err)
            } else {
                console.log(doc);
            }

        })
    } catch (e) {
        console.log(e)
    }

    res.render('login/login', {title: '登录'});
});


module.exports = router;
