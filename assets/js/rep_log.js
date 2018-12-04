import RepLogApp from './Components/RepLogApp';
import $ from 'jquery';

$(document).ready(function() {
    var $wrapper = $('.js-rep-log-table');
    var repLogApp = new RepLogApp($wrapper);
});
