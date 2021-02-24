const express = require('express');
const router = express.Router();
const path = require('path');
const shoseData = require('../public/json/products.json');


router.use('/home', (request, response) => {
    // query => ?name=foo
    let target = request.query.search;
    let result = [];

    // search render || home render
    if (target) {
        shoseData.forEach(element => {
            if (element.size === target || element.color === target || element.model.includes(target) || element.title.includes(target) || element.material.includes(target)) {
                result.push(element);
            }
        });

        // serach found || not found
        let targetPage = (result.length === 0) ? 'product404' : 'home';

        response.render(path.join(__dirname, '../', 'views', `${targetPage}.ejs`), {
            data: result,
            keyword: 'محصول'
        });
    } else {
        response.render(path.join(__dirname, '../', 'views', 'home.ejs'), {
            data: shoseData
        });
    }    
});

// root: home
router.get('/', (request, response) => {
    response.render(path.join(__dirname, '../', 'views', 'home.ejs'), {data: shoseData});
});



module.exports = router;