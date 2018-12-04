'use strict';

import $ from 'jquery';
import 'bootstrap';
import '../css/login.css';

    $(document).ready(function() {
        $('.js-show-login').tooltip();

        $('.js-recommended-login').on('click', '.js-show-login', function(e) {
            e.preventDefault();

            $('.js-recommended-login-details').toggle();
        });

        $('.js-login-field-email').on('keydown', function(e) {
            const $emailInput = $(e.currentTarget);
            // remove any existing warnings
            $('.login-long-email-warning').remove();

            if ($emailInput.val().length >= 30) {
                import('./Components/show_long_email_error').then(showLoginEmailError => {
                    showLoginEmailError($emailInput);
                });
            }
        });
    });
