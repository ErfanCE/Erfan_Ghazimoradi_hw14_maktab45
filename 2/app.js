const express = require('express');
const app = express();
const path = require('path');
const signupRoute = require('./routes/signupRoute.js');
const loginRoute = require('./routes/loginRoute.js');
const profileRoute = require('./routes/profileRoute.js');
const editRoute = require('./routes/editRoute.js');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public', {extensions: false}));

app.use('/', loginRoute);

app.use('/', signupRoute);

app.use('/', profileRoute);

app.use('/', editRoute);

app.use('*', (request, response) => {
    response.send('<pre style="color: red"><b>404:</b> Page not Found!</pre>');
})


app.listen(8000, () => {
    console.log('Server is running on :8000 ...');
});