var express = require('express');
const houses_controlers= require('../controllers/houses');
var router = express.Router();

/* GET home page. */
router.get('/', houses_controlers.houses_view_all_Page );

module.exports = router;