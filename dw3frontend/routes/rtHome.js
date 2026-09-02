var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home', {
        title: 'Home',
        showNavbar: true
    });
});

module.exports = router;