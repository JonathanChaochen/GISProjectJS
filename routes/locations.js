const router = require('express').Router();
const locations = require('../misc/locations')

router.get('/:version', function(req, res, next) {
    res.json({ locations: locations[req.params.version] });
});

module.exports = router;