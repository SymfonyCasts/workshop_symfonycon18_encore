const Conference = require('./conference');

const sfCon = new Conference('SymfonyCon 2018');

setTimeout(function() {
    console.log(sfCon.name);
}, 500);
console.log('Done!');