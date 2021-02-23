const fs = require('fs');
const path = require('path');

let signupList = require('../public/json/signupList.json');


exports.signupHandler = (request, response) => {
    let targetUser = request.body;
    let isExist = false;

    // check for empty input
    if (targetUser.username.trim() === '' || targetUser.password === '' || targetUser.email === '') return sendStatus(response, 'empty');

    // check for exist user return: true, false
    signupList.forEach(listUser => {
        if (targetUser.username === listUser.username)  isExist = true;
        listUser.isLoggedIn = false;
    });

    // for valid signup add user object in json
    if (isExist) {
        return sendStatus(response, 'exist');
    } else {
        targetUser.isLoggedIn = false;

        signupList.push(targetUser);

        fs.writeFile(path.join(__dirname, '../', 'public', 'json', 'signupList.json'), JSON.stringify(signupList), (err) => {
            if (err) return console.log(err);

            return sendStatus(response, 'create');
        });
    }
}

function sendStatus(response, status) {
    response.send(status);
}