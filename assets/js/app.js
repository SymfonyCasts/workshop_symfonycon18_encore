'use strict';

const $ = require('jquery');
require('bootstrap');
require('jquery-tags-input/dist/jquery.tagsinput.min');
require('../css/app.scss');

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

        // just example code
        $('#tags').tagsInput();
    });
