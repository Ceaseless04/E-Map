require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const user = require('./db/mongo.js');

// middlewares for express api to run as expected
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/dashboard.html");
});

app.get('/Login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/Signup', (req, res) => {
    res.sendFile(__dirname + '/views/signup.html');
});

app.post('/Signup', async (req, res) => {
    const { username, password } = req.body;
    let create_user = new user.User({
        username,
        password
    });

    try {
    const user_success = await create_user.save();
    res.sendFile(__dirname + );
    } catch(e) {
        console.log(e);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});