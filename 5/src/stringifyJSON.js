// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var output = '';

  if (obj === null) {
    return 'null';
  }

  if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    output += obj;
  }

  if (typeof(obj) === 'string' || typeof(obj) === 'object') {
    var str = '\"' + obj + '\"';
    output += str;
  }


  if (Array.isArray(obj)) {
    var array = [];
    obj.forEach (function(element) {
      array.push(stringifyJSON(element));
    });
    return '[' + array.join(',') + ']';

  }

  if (!Array.isArray(obj) && typeof(obj) === 'object') {
    for (var key in obj) {
      if (key !== undefined && obj[key] !== undefined && key !== 'functions'
      && typeof(obj[key]) !== 'function') {
        var inner = stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        output += inner;
      }
    }

    return '{' + output.slice(17, output.length - 1) + '}';


  }



  //if all element stringify, return ' entire element'
  //false, then function make string
  //if number, null boolean and array, make then String()
  //if object, make only key string
  return output;
};
