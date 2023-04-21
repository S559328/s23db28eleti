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
/*for a specific houses.
exports.houses_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: houses detail: ' + req.params.id);
};*/
// Handle houses create on POST.
exports.houses_create_post = async function(req, res) {
    console.log(req.body)
    let document = new houses();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Drink_type":"goat", "cost":12, "size":"large"}
   
    document.houses_color = req.body.houses_color;
    document.houses_length = req.body.houses_length;
    document.houses_cost = req.body.houses_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle houses delete form on DELETE.
exports.houses_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: houses delete DELETE ' + req.params.id);
};
// Handle houses update form on PUT.
exports.houses_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await houses.findById( req.params.id)
    // Do updates of properties
    if(req.body.houses_color)
    toUpdate.houses_color = req.body.houses_color;
    if(req.body.houses_length) toUpdate.houses_length = req.body.houses_length;
    if(req.body.houses_cost) toUpdate.houses_cost = req.body.houses_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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


   // for a specific houses.
exports.houses_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await houses.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

   // Handle houses delete on DELETE.
exports.houses_delete = async function(req, res) {
 console.log("delete " + req.params.id)
 try {
 result = await houses.findByIdAndDelete( req.params.id)
 console.log("Removed " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": Error deleting ${err}}`);
 }
};

// Handle a show one view with id specified by query
exports.houses_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await houses.findById( req.query.id)
    res.render('housesdetail',
   { title: 'houses Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a houses.
// No body, no in path parameter, no query.
// Does not need to be async
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.houses_create_Page = function(req, res) {
    console.log("houses view")
    try{
        res.render('housescreate', { title: 'houses Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


   // Handle building the view for updating a houses.
// query provides the id
exports.houses_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await houses.findById(req.query.id)
    res.render('housesupdate', { title: 'houses Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.houses_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await houses.findById(req.query.id)
    res.render('housesdelete', { title: 'houses Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle a show one view with id specified by query
exports.houses_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await houses.findById( req.query.id)
    res.render('housesdetail',
   { title: 'houses Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.houses_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await houses.findById(req.query.id)
    res.render('housesupdate', { title: 'houses Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.houses_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await houses.findById(req.query.id)
    res.render('housesdelete', { title: 'houses Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

