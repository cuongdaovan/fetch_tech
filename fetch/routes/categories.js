var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/categories/', function(rep, res, next){
    models.Category.findAll().then(cat => {
        res.send(cat);
    });
});

module.exports = router;