/*
Author : Parshant Nagpal
Description : Project start
filename  : index.js
*/
'use strict';
const Hapi = require('hapi');

const server= Hapi.server({
    host : 'localhost',
    port : 4000  
});

server.route({
    method : 'GET',
    path : '/hello',
    handler : function(request,h){
        return 'hello world'
    }
});

async function start(){

    try{
        await server.start();
    }catch(err){
        console.log(err);
        process.exit(1);
    }
    console.log('server running at', server.info.uri)
};

start();