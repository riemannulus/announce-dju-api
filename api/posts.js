const router = require('express').Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
    Post.findAll()
        .then((posts) => {
            if (!posts.length) return res.status(404).send({ err: 'Post not found'});
            res.send(posts);
        })
        .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
    Post.create(req.body)
        .then(post => res.send({status: "200 OK"}))
        .catch(err => res.status(500).send(err));
});

module.exports = router;
