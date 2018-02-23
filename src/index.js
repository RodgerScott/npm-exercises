const $ = require('jquery');

const sayHello = () => $('h1').html("Hello");

sayHello();


const data = require('./say-hello.js');

console.log(data);