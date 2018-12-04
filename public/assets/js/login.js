'use strict';

const $ = require('jquery');

    $(document).ready(function() {
        $('.js-recommended-login').on('click', '.js-show-login', function(e) {
            e.preventDefault();

            $('.js-recommended-login-details').toggle();
        });

        $('.js-login-field-email').on('keydown', function(e) {
            const $emailInput = $(e.currentTarget);
            // remove any existing warnings
            $('.login-long-email-warning').remove();

            if ($emailInput.val().length >= 30) {
                const $warning = $('<div class="login-long-email-warning">This is a really long email - are you sure that is right?</div>');
                $emailInput.before($warning);
            }
        });
    });
