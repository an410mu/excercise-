// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = [];
  var findElement = function(element) {
    if (element.classList && element.classList.contains(className)) {
      output.push(element);
    }
    if (element.childNodes) {
      element.childNodes.forEach(function(node) {
        findElement(node);
      });
    }
  };
  findElement(document.body);
  return output;

};


