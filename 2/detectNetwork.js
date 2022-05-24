// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardLength = cardNumber.length;
  var prefix = Number(cardNumber.slice(0, 2));
  if ((prefix === 38 || prefix === 39) && cardLength === 14) {
    return 'Diner\'s Club';
  }
  if ((prefix === 34 || prefix === 37) && cardLength === 15) {
    return 'American Express';
  }
  if (Number(cardNumber[0]) === 4 && Number(cardNumber[1]) !== 9
  && [13, 16, 19].includes(cardLength)) {
    return 'Visa';
  }
  // if (Number(cardNumber[0] === 4 && cardLength === 14)) {
  //   return 'Visa';
  // }
  if ([51, 52, 53, 54, 55].includes(prefix) && cardLength === 16) {
    return 'MasterCard';
  }

  // if (cardNumber.slice(0, 4) === '6011' && (cardLength === 16 || cardLength === 19)) {
  //   return 'Discover';
  // }
  // if (['644', '645', '646', '647', '648', '649'].includes(cardNumber.slice(0, 3))
  // && (cardLength === 16 || cardLength === 19)) {
  //   return 'Discover';
  // }
  // if (cardNumber.slice(0, 2) === '65' && cardLength === 16 || cardLength === 19) {
  //   return 'Discover';
  // }

  if (cardLength === 16 || cardLength === 19) {
    if (['644', '645', '646', '647', '648', '649'].includes(cardNumber.slice(0, 3))
    || cardNumber.slice(0, 4) === '6011' || cardNumber.slice(0, 2) === '65' ) {
      return 'Discover';
    }
  }

  if (['5018', '5020', '5038', '6304'].includes(cardNumber.slice(0, 4))
    && [12, 13, 14, 15, 16, 17, 18, 19].includes(cardLength)) {
    return 'Maestro';
  }



  var range = function (start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  //var unionPayRange = [];
  var unionPayRange = range(622126, 622926).concat(range(624, 627)).concat(range(6282, 6289));
  if (unionPayRange.includes(Number(cardNumber.slice(0, 6)))
  || unionPayRange.includes(Number(cardNumber.slice(0, 3)))
  || unionPayRange.includes(Number(cardNumber.slice(0, 4)))) {
    if ([16, 17, 18, 19].includes(cardLength)) {
      return 'China UnionPay';
    }
  }

  var switchRange = [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110];

  if (switchRange.includes(Number(cardNumber.slice(0, 6)))
  || switchRange.includes(Number(cardNumber.slice(0, 4)))) {
    if ([16, 18, 19].includes(cardLength)) {
      return 'Switch';
    }
  }



};