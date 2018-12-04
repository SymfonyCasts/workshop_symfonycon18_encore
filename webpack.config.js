const path = require('path');

module.exports = {
    entry: './public/assets/js/RepLogApp.js',
    output: {
        filename: 'rep_log.js',
        path: path.resolve(__dirname, 'public/build')
    },
    mode: 'development'
};
