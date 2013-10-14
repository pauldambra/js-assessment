if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var results = [];
    	var resultCount = 0;
    	for(var prop in obj) {
    		if (obj.hasOwnProperty(prop)) {
				results[resultCount++] 
					= prop + ': ' + obj[prop];
    		}
    	}
    	return results;
    }
  };
});
