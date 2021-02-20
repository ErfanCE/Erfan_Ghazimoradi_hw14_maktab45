const express = require('express');
const app = express();
const path = require('path');
const signupRoute = require('./routes/signupRoute.js');
const loginRoute = require('./routes/loginRoute.js');
const profileRoute = require('./routes/profileRoute.js');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public', {extensions: false}));

app.use('/', loginRoute);

app.use('/', signupRoute);

app.use('/', profileRoute);

app.listen(8000, () => {
    console.log('Server is running on :8000 ...');
});