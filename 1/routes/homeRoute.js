const express = require('express');
const router = express.Router();
const path = require('path');
const shoseData = require('../public/json/products.json');


router.get('/home', (request, response) => {
    response.render(path.join(__dirname, '../', 'views', 'home.ejs'), {data: shoseData});
});

router.get('/', (request, response) => {
    response.render(path.join(__dirname, '../', 'views', 'home.ejs'), {data: shoseData});
});


module.exports = router;