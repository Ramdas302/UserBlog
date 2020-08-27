const express = require('express');
const bodyParser = require('body-parser');
const blogsRoutes = require('./Controller/blog');
const userRoutes = require('./Controller/user');

const mongoose =  require('./database/db')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PUT"
    );

    next();
});

app.use('/api/blogs', blogsRoutes);
app.use('/api/user', userRoutes);

app.listen(3000,  console.log('server started at port 3000'))

module.exports = app;
