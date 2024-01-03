require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI);

const user_schema = new Schema({
    username: String,
    password: String
});

const User = mongoose.model("User", user_schema);

exports.User = User;