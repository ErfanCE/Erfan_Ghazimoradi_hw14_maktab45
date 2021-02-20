const express = require('express');
const router = express.Router();
const path = require('path');
const loginController = require('../controllers/loginController.js');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (request, response) => {
    response.render(path.join(__dirname, '../', 'views', 'login.ejs'));
});

router.get('/login', (request, response) => {
    response.render(path.join(__dirname, '../', 'views', 'login.ejs'));
});

router.post('/getLogin', loginController.loginHandller);

module.exports = router;