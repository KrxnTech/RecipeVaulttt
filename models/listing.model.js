const mongoose = require('mongoose')
const Schema = mongoose.Schema

const defaultImageUrl = "https://img.magnific.com/free-photo/grilled-zucchini-with-vegetables-tomato-sauce-concept-vegetarian-food_127032-3094.jpg?semt=ais_hybrid&w=740&q=80"

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    image: {
        type: Schema.Types.Mixed,
        default: defaultImageUrl
    },
    Description: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    }
})


const Listing = mongoose.model("Listing" , ListingSchema)
module.exports = Listing