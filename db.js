/*
Author : Parshant Nagpal
Description : create database connection
filename  : account.js
*/

import Mongoose from 'mongoose';

export default async ()=>{
    Mongoose.connect('mongodb://localhost/hapiSeventeen',);
    var db = Mongoose.connection;
    db.on('error',console.error.bind(console,'Connection error'));
    db.once('open',()=>{
        console.log("Connection successfull");
    });
};

