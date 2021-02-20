const express = require('express');
const router = express.Router();
const path = require('path');
const signupController = require('../controllers/signupController.js');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extended: true}));

router.get('/signup', (request, response) => {
    response.render(path.join(__dirname, '../', 'views', 'signup.ejs'));
});

router.post('/getSignup', signupController.signupHandler);


module.exports = router;