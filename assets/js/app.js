'use strict';

const $ = require('jquery');
require('bootstrap');
require('jquery-tags-input/dist/jquery.tagsinput.min');
require('bootstrap/dist/css/bootstrap.css');
require('../css/app.css');

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

        // just example code
        $('#tags').tagsInput();
    });
