const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');

const login = require('./routes/api/user');
const dashboard = require('./routes/api/blog');

mongoUri = 'mongodb+srv://admin:tentangkopi@cluster0.razyx.mongodb.net/tentang_kopi?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => console.log('Connected to Mongodb'));
app.use(express.static('TentangKopi'))
app.use(express.static(path.join(__dirname, "/Homepage")));
app.use(express.static(path.join(__dirname, "/Image")));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/Homepage/Website Ilmu Kopi.html'));
});
app.use(express.static(path.join(__dirname, "Login/signin.html")));

app.use(express.urlencoded());
app.use(express.json());


app.use('/', dashboard);
app.use('/', login);
app.use('/', router);
app.listen(8080);

console.log('Runing at port 8080');