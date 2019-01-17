// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const http = require('https');
var unirest = require("unirest");

let errorResposne = {
    results: []
};

var port = process.env.PORT || 8080;

// create serve and configure it.
const server = express();
server.use(bodyParser.json());


server.get('/getName',function (req,res){
    res.send('Swarup Bam');
});


server.listen(port, function () {
    console.log("Server is up and running...");
});