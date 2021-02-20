const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/about', (request, response) => {
    response.render(path.join(__dirname, '../', 'views', 'about.ejs'));
});


module.exports = router;