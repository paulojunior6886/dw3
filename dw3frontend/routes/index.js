//-- Criar o arquivo routes/rtIndex.js
//touch routes / rtIndex.js
// Conteúdo do arquivo routes/rtIndex.js
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.redirect('/login');
});
module.exports = router;
