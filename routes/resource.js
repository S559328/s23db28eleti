var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var houses_controller = require('../controllers/houses');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// houses ROUTES ///
// POST request for creating a houses.
router.post('/houses', houses_controller.houses_create_post);
// DELETE request to delete houses.
router.delete('/houses/:id', houses_controller.houses_delete);
// PUT request to update houses.
router.put('/houses/:id', houses_controller.houses_update_put);
// GET request for one houses.
router.get('/houses/:id', houses_controller.houses_detail);
// GET request for list of all houses items.
router.get('/houses', houses_controller.houses_list);
module.exports = router;