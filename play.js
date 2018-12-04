const Conference = require('./conference');

const sfCon = new Conference('SymfonyCon 2018');

sfCon.printNameLater()
    .then(() => {
        console.log('callback!');
    });
console.log('Done!');
