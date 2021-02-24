const express = require('express');
const router = express.Router();
const path = require('path');
const shoseData = require('../public/json/products.json');


router.use(express.static('public', {extensions: false}));

router.get('/:id', (request, response) => {
    let product = shoseData.find(shose => shose.id == request.params.id);

    if (!product) return response.status(404).render(path.join(__dirname, '../', 'views', 'product404.ejs'), {keyword: 'محصول'});

    response.render(path.join(__dirname, '../', 'views', 'product.ejs'), {product: product});
});


module.exports = router;