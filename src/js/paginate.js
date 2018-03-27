/*global console, document, $, jQuery */
(function ($) {
    'use strict';
    $(document).ready(function () {

        // Appel du plugin
        $('.pagination').pagination({
            itemsToPaginate: ".post",
            activeClass: 'active',
            itemsPerPage: 9 // default: 5

        });

        $('.pagination ul li:first').addClass('active');
        $('.pagination ul').addClass('mx-auto');
    });

}(jQuery));