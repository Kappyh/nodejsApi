var express = require('express'),
    router = express.Router();

router.get('/', function (request, response) {
    response.status(201);
    response.json({ 'name': 'Gabriela', 'idade': 27 });
});

module.exports = router;