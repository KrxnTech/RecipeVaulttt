const mongoose = require('mongoose')
const SeederData = require('./Seeder.js')
const Listing = require('../models/listing.model.js')
const MONGO_URL = 'mongodb://127.0.0.1:27017/RecipeVault'
main()
    .then(() => {
        console.log("Connected to DB ....");
    })
    .catch((Err => {
        console.log("Got Something Error While Connecting to DataBase .... ", Err);
    }))

async function main() {
    await mongoose.connect(MONGO_URL);
}

const NewDataInitializationFunction = async () => {
    await Listing.deleteMany({})
    await Listing.insertMany(SeederData.data)
    console.log("Data Was Inilializedddd !!!")
}

NewDataInitializationFunction() 