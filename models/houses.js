const mongoose = require("mongoose")
const housesSchema = mongoose.Schema({
    houses_color: String,
    houses_length: String,
    houses_cost: String
})
module.exports = mongoose.model("houses",housesSchema)