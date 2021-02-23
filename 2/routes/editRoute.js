const express = require('express');
const router = express.Router();
const path = require('path');
const usersList = require('../public/json/signupList.json');
const editController = require('../controllers/editController.js');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/edit-:username', (request, response) => {

    let targetUser = usersList.find(user => user.username === request.params.username);

    if (targetUser.isLoggedIn) {
        response.render(path.join(__dirname, '../', 'views', 'edit.ejs'), {
            user: targetUser
        });
    } else {
        response.redirect('/');
    }
});

router.post('/updateUser', editController.editHandller);


module.exports = router;