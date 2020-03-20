'use strict';

const express = require('express');
const router = express.Router();


const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Teste prático Crawler Mercado Livre.",
        version: "1.0.0"
    });
});

module.exports = router;