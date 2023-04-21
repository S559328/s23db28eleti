var express = require('express');
const houses_controlers= require('../controllers/houses');
var router = express.Router();

/* GET home page. */
router.get('/', houses_controlers.houses_view_all_Page );

module.exports = router;

/* GET detail houses page */
router.get('/detail', houses_controlers.houses_view_one_Page);

/* GET create costume page */
router.get('/create', houses_controlers.houses_create_Page);


/* GET create update page */
router.get('/update', houses_controlers.houses_update_Page);

/* GET delete costume page */
router.get('/delete', houses_controlers.houses_delete_Page);

/* GET create update page */
router.get('/update', houses_controlers.houses_update_Page);

/* GET delete costume page */
router.get('/delete', houses_controlers.houses_delete_Page);

