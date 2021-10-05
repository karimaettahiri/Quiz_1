const express = require('express');
const knex = require('../db/client');
const router = express.Router();


router.get("/new", (req, res) => {
    res.render("clucks/new");
});

router.get("/", (req, res) => {
    knex.select('*')
        .from('clucks')
        .orderBy('createdAt', 'desc')
        .then(data => {
            console.log(data);
            res.render("clucks/index", { list: data });
        })
});

router.post("/", (req, res) => {
    let username = req.cookies.username || 'anonymous';
    if (username == req.cookies.username) {

        console.log(`Inserting ${req}`);
        knex("clucks")
            .insert(
                {
                    username: username,
                    content: req.body.content,
                    imageUrl: req.body.imageUrl
                },
                "*"
            )
            .then(data => {
                console.log(data);
                res.redirect(`/clucks`)
            });

    } else {
        console.log('you must sign in first');
    }

});




module.exports = router;