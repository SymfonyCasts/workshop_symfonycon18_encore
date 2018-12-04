'use strict';

import $ from 'jquery';
import 'bootstrap';
import 'jquery-tags-input/dist/jquery.tagsinput.min';
import '../css/app.scss';
import '@babel/polyfill';

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

        // just example code
        $('#tags').tagsInput();
    });
