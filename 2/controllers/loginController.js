const usersList = require('../public/json/signupList.json');
const fs = require('fs');
const path = require('path');

exports.loginHandller = (request, response) => {
    let targetUser = request.body;
    let isSignup = false;

    if (targetUser.username.trim() === '' || targetUser.password.trim() === '') return loginStatus(response, 'empty');


    usersList.forEach(listUser => {
        if (targetUser.username === listUser.username && targetUser.password === listUser.password) {
            listUser.isLoggedIn = true;
            isSignup = true;
        } 
    });

    if (!isSignup) {
        return loginStatus(response, 'signup');
    } else {
        fs.writeFile(path.join(__dirname, '../', 'public', 'json', 'signupList.json'), JSON.stringify(usersList), (err) => {
            if (err) return console.log(err);

            return loginStatus(response, 'login');
        });
    }
}

function loginStatus(response, status) {
    response.send(status);
}