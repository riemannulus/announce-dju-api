const router = require('express').Router();
const mongoose = require('mongoose');
const Tag = mongoose.model('Tag', require('../models/tag'));

router.get('/', (req, res) => {
    Tag.findAll()
        .then((tags) => {
            if (!tags.length) return res.status(404).send({ err: 'Tag not found'});
            res.send(tags);
        })
        .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
   Tag.create(req.body)
       .then(tag => res.send({status: "200 OK"}))
       .catch(err => res.status(500).send(err));
});

module.exports = router;
