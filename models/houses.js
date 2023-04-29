const mongoose = require("mongoose")
const housesSchema = mongoose.Schema({
    houses_color: {
        type:String,
        required: true,
        match:/^[a-zA-Z]+$/
    } ,
    houses_length: String,
    houses_cost: {
        type :String,
        pattern: /^[a-z]+$/
    }
})
module.exports = mongoose.model("houses",housesSchema)