/**
 * Created by mc on 16/12/25.
 */
var express = require('express');
var router = express.Router();
var PostModel = require('../models/posts');
var CommentModel = require('../models/comments');

var checkLogin = require('../middlewares/check').checkLogin;

// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx
/*router.get('/', function(req, res, next) {
 res.send(req.flash());
 });*/

router.get('/about', function(req, res, next) {
    var author = req.query.author;

    PostModel.getPosts(author)
        .then(function (posts) {
            res.render('about', {
                posts: posts
            });
        })
        .catch(next);
});

module.exports = router;