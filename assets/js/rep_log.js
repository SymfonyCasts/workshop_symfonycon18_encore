const RepLogApp = require('./Components/RepLogApp');
const $ = require('jquery');

$(document).ready(function() {
    var $wrapper = $('.js-rep-log-table');
    var repLogApp = new RepLogApp($wrapper);
});
