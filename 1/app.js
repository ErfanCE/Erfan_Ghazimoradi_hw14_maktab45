const express = require('express');
const app = express();
const path = require('path');
const homeRoute = require('./routes/homeRoute.js');
const contactRoute = require('./routes/contactRoute.js');
const aboutRoute = require('./routes/aboutRoute.js');
const productRoute = require('./routes/productRoute.js');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public', {extensions: false}));

app.use('/', homeRoute);

app.use('/', contactRoute);

app.use('/', aboutRoute);

app.use('/', productRoute);


// 404: page not found
app.use('*', (requset, response) => {
    response.status(404).render(path.join(__dirname, 'views', 'product404.ejs'), {
        keyword: 'صفحه'
    });
});


app.listen(8000, () => {
    console.log('Server is running on :8000 ...');
});