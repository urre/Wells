(function() {

    'use strict';

    var Gulpsetup = {

        init: function() {

            this.starter();

        },

        starter: function() {

            console.log('Gulpsetup ok');

        },

    };

    document.addEventListener('DOMContentLoaded', function() { 

        Gulpsetup.init();

    });

}());