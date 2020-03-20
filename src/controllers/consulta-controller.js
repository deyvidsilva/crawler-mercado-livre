'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const rp = require('request-promise');
const cheerio = require('cheerio');

express.urlencoded({extended: false});

exports.post = async(req, res, next) => {


    try {

        var search = req.body.search;
        const jsonObject = search.replace(' ', '-');

        const options = {
            uri: 'https://lista.mercadolivre.com.br/' + jsonObject,
            transform: function (body) {
                return cheerio.load(body);
            }
        }

        rp(options)
                .then(($) => {
                    const produtos = [];
                    $('.results-item').each((i, item) => {

                        const produto = {
                            name: $(item).find('span.main-title').text(),
                            link: $(item).find('.item__info-link').attr('href'),
                            price: $(item).find('.price__fraction').text() + "." + $(item).find('.price__decimals').text(),
                            store: $(item).find('.item__brand-title-tos').text(),
                            state: ""
                                    //posicao: parseInt($(item).find('.tabela-times-posicao').text())
                        };

                        if (produto.nome !== "")
                            produtos.push(produto);

                        if (i === req.body.limit) {
                            return false;
                        }
                    });

                    res.status(200).send(produtos);
                })
                .catch((err) => {
                    console.log(err);
                });

    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

};