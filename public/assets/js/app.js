'use strict';

const $ = require('jquery');
require('bootstrap');
require('jquery-tags-input');

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

        // just example code
        $('#tags').tagsInput();
    });
