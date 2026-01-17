const mongoose = require("mongoose")

const connectDB = async () => {
    try {
    const url = "mongodb+srv://manikdolai:MWehO6ZZbGngsHwd@cluster0.qexldxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const response = await mongoose.connect(url);
    // console.log(response);
    console.log("MongoDB connection is successful")
    } catch(error) {
        console.log("Mongo DB connection error", error)
        process.exit(1);
    }
};

module.exports = connectDB;