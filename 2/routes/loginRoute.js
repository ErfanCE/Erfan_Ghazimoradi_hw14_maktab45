const express = require('express');
const router = express.Router();
const path = require('path');
const loginController = require('../controllers/loginController.js');
const bodyParser = require('body-parser');
const fs = require('fs');
let usersList = require('../public/json/signupList.json');


router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (request, response) => {
    usersList.forEach(user => {
        user.isLoggedIn = false;
    });

    fs.writeFile(path.join(__dirname, '../', 'public', 'json', 'signupList.json'), JSON.stringify(usersList), (err) => {
        if (err) return console.log(err);

        console.log('logout');
    });

    response.render(path.join(__dirname, '../', 'views', 'login.ejs'));
});

router.get('/login', (request, response) => {
    usersList.forEach(user => {
        user.isLoggedIn = false;
    });

    fs.writeFile(path.join(__dirname, '../', 'public', 'json', 'signupList.json'), JSON.stringify(usersList), (err) => {
        if (err) return console.log(err);

        console.log('logout');
    });
    
    response.render(path.join(__dirname, '../', 'views', 'login.ejs'));
});

router.post('/getLogin', loginController.loginHandller);

module.exports = router;