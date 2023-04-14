var houses = require('../models/houses');
// List of all housess
// List of all houses
exports.houses_list = async function(req, res) {
    try{
    thehouses = await houses.find();
    res.send(thehouses);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific houses.
exports.houses_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: houses detail: ' + req.params.id);
};
// Handle houses create on POST.
exports.houses_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: houses create POST');
};
// Handle houses delete form on DELETE.
exports.houses_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: houses delete DELETE ' + req.params.id);
};
// Handle houses update form on PUT.
exports.houses_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: houses update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.houses_view_all_Page = async function(req, res) {
    try{
    thehousess = await houses.find();
    res.render('houses', { title: 'houses Search Results', results: thehousess });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };