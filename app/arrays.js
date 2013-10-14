if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var i = 0; i<arr.length; i++) {
            var index = i;
            var current = arr[index];
            if (current === item) {
                return index;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var total = 0;
        for(var i=0; i<arr.length;i++) {
            total += arr[i];
        }
        return total;
    },

    remove : function(arr, item) {
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            var current = arr[i];
            if (current !== item) {
                results.push(current);
            }
        }
        return results;
    },

    removeWithoutCopy : function(arr, item) {
        var i, len;

        for (i = 0, len = arr.length; i < len; i++) {
          if (arr[i] === item) {
            arr.splice(i, 1);
            i = i - 1;
            len = len - 1;
          }
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for(var i = 0, length = arr.length; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
      var seen = {};
      var dupes = [];

      for (var i = 0, len = arr.length; 
            i < len; i++) {
        seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
      }

      for (var item in seen) {
        if (seen.hasOwnProperty(item) && seen[item] > 1) {
          dupes.push(item);
        }
      }

      return dupes;
    },

    square : function(arr) {
        var results = []
        for (var i = 0, len = arr.length; 
            i < len; i++) {
            results[i] = arr[i]*arr[i];
        }
        return results;
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
