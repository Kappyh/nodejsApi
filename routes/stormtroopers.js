var express = require('express'),
router = express.Router();

router.get('/', function(request, response){
    response.send('get all stormtroopers');
});

router.get('/:id', function(request, response){
    response.send('get a specific stormtrooper by id');
});

router.post('/', function(request, response){
    response.send('create a new stormtrooper');
});

router.put('/:id', function(request, response){
    response.send('update stormtrooper');
});

router.delete('/:id', function(request, response){
    response.send('remove stormtrooper');
});

module.exports = router;