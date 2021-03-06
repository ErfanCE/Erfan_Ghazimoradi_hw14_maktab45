const express = require('express');
const router = express.Router();
const path = require('path');
const usersList = require('../public/json/signupList.json');

router.get('/profile-:username', (request, response) => {

    let targetUser = usersList.find(user => user.username === request.params.username);

    if (targetUser.isLoggedIn) {
        response.render(path.join(__dirname, '../', 'views', 'profile.ejs'), {
            user: targetUser
        });
    } else {
        response.redirect('/');
    }
});


module.exports = router;