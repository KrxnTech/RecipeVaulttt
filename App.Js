const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8080
const MONGO_URL = 'mongodb://127.0.0.1:27017/RecipeVault'
const path = require('path')
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname, "/public")))
const Listing = require("./models/listing.model.js")

// CONNECTING DATABASE ....
async function main() {
    await mongoose.connect(MONGO_URL)
}

// FOR CALL ....
main().then(() => {
    console.log("Connected to DB ....") // IF DB CONNECT !!!! 
}).catch(Err => {
    console.log("Got Something Error While Connecting to DataBase .... ", Err)
})

// INDEX ROUTE 
app.get("/RecipeListings" , async (req , res) => {
    const AllRecipeListings = await Listing.find({})
    res.render("listings/index.ejs" , {AllRecipeListings})
})

// SHOW ROUTE 
app.get("/RecipeListings/:id" , async (req , res) => {
    const {id} = req.params
    const SingleRecipeFromListings = await Listing.findById(id)
    res.render("listings/show.ejs" , {SingleRecipeFromListings})
})



/*
// TESTING 
app.get("/TestListingRoute" , async (req , res) => {
    // CREATE A SAMPLE LISTING ? 
    let SampleListing = new Listing({
        Recipe_Name: "Classic Margherita Pizza",
        Category: "Dinner",
        Ingredients: [
            "Pizza Dough",
            "Tomato Sauce",
            "Mozzarella Cheese",
            "Fresh Basil",
            "Olive Oil"
        ],
        Difficulty: "Easy",
        Description: "Tasty Tha Bhaiiiii !!",
        Instructions: "Spread tomato sauce over the dough, add mozzarella cheese, bake at 220°C for 15 minutes, garnish with fresh basil and olive oil."
    })
    await SampleListing.save()
    console.log("Data Was Save ?")
    res.send("Testing Done !!")
    console.log(SampleListing)
})
*/

// UNIVERSAL ROUTE ....
app.get("/" , (req , res) => {
    res.redirect("/RecipeListings")
})

app.listen(PORT , (req , res)=>{
    console.log("Server Start ?")
})

