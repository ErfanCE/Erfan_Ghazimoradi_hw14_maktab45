const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/contact', (request, response) => {
    response.render(path.join(__dirname, '../', 'views', 'contact.ejs'));
});


module.exports = router;