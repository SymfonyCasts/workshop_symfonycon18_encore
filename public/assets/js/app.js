'use strict';

const $ = require('jquery');
require('bootstrap');
global.jQuery = $;
require('jquery-tags-input/dist/jquery.tagsinput.min');

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

        // just example code
        $('#tags').tagsInput();
    });
