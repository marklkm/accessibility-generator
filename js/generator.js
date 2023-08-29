/*jslint browser: true, white: true, single: true, for: true, long: true */
/*global $, alert, console, window, jQuery */

// Accessibility statement generator logic 
var generator = (function($) {
    'use strict';

    // Private functions and variables
    var buckets = {
        yes: [],
        no: [],
        reqad: [],
        req: []
    };

    var options = [
        'seating', 'paddedseating', 'basicseating', 'wheelchairtoilet', 'accessibletoilet',
        'changingplacestoilet', 'genderneutraltoilet', 'hearingloop', 'isl', 'social',
        'online', 'inperson', 'contactorg', 'contact', 'conemail', 'ename', 'slides',
        'quietspace', 'parking', 'bluebadge', 'subtitles', 'cc', 'audiodescription', 'englishaudio'
    ];

    // ... [other private functions and variables]

    // Public functions and variables
    return {
        init: function() {
            // Hide JS message and show section as JS support confirmed
            $('.noJS').hide();
            $('.requireJS').show();

            // Style tooltips and set title
            $('span[title]').each(function(i, spanElement) {
                var parent = $(spanElement).parent();
                parent[0].title = spanElement.title;
                parent.tooltip();
                $(spanElement).text('?').addClass('tooltipindicator');
            });

            // Hide the short version questions block by default
            $('#shortquestions').hide();

            // Event listeners
            $("#greyed").on('click', function() {
                generator.toggle(this);
                generator.refresh();
            });

            $("#type").on('click', function() {
                generator.toggle(this);
                generator.chooseType();
                generator.refresh();
            });

            $("#generate button").on('click', generator.generateChoice);

            $("#select").on('click', function() {
                $('#result').focus().select().window.print();
            });

            // ... [other event listeners]

            // Initial function calls
            generator.toggleSteps();
            generator.accessChange();
            generator.filmChange();
            generator.separateWording();
        },

        toggle: function(toggle) {
            // ... [toggle function code]
        },

        chooseType: function() {
            // ... [chooseType function code]
        },

        generateChoice: function() {
            // ... [generateChoice function code]
        },

        // ... [other public functions]

        showResult: function(result) {
            // ... [showResult function code]
        }
    };
}(jQuery));

// Initialize the generator
$(document).ready(function() {
    generator.init();
});
