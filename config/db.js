const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");

require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected Successfuly!");
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = connectDb;