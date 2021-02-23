let usersList = require('../public/json/signupList.json');
const fs = require('fs');
const path = require('path');

exports.editHandller = (request, response) => {
    let targetUser = request.body;

    usersList.forEach(user => {
        if (user.username === targetUser.username.trim()) {
            user.password = targetUser.password.trim();
            user.email = targetUser.email.trim();
            user.gender = targetUser.gender.trim();
        }

        user.isLoggedIn = false;
    });

    fs.writeFile(path.join(__dirname, '../', 'public', 'json', 'signupList.json'), JSON.stringify(usersList), (err) => {
        if (err) return console.log(err);

        console.log(targetUser.username + 'updated!');

        return editStatus(response, 'edit');

    });
}

function editStatus(response, status) {
    response.send(status)
}