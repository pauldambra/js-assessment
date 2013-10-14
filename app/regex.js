if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var pattern = /\d+/;
        return str.contains(pattern);
    },

    containsRepeatingLetter : function(str) {

    },

    endsWithVowel : function(str) {

    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
