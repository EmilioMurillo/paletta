$(document).ready(function() {
    'use strict';
    $('form.contact-form').on('submit', function(e) {
        $.post('mail/contact.php', $(this).serialize(), function(response) {
            if ($('.confirmation p').html() != "") {
                $('.confirmation p').replaceWith('<p><span class="fa fa-check"></span></p>');
            }
            $('.confirmation p').append(response).parent('.confirmation').show();
            $('html, body').animate({
                scrollTop: $('#section-contact').offset().top
                },{duration:800,queue:true});
            $('.form-item').val('');
            setTimeout(function() {
                $('.confirmation').hide();
            }, 8000);
        });
        // disable default action
        e.preventDefault();
    });

});