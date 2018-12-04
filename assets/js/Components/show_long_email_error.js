import $ from 'jquery';

export default function($emailInput) {
    const $warning = $('<div class="login-long-email-warning">This is a really long email - are you sure that is right?</div>');
    $emailInput.before($warning);
}
