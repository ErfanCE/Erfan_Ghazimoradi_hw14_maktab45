const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const searchController = require('../controllers/searchController.js');


// parse post body: {username: foo, password: foo}
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/getUser', searchController.loginHandler);


module.exports = router;