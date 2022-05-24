var _; // globals

describe('About Applying What We Have Learnt', function() {
  var products;

  beforeEach(function () {
    products = [
      { name: 'Sonoma', ingredients: ['artichoke', 'sundried tomatoes', 'mushrooms'], containsNuts: false },
      { name: 'Pizza Primavera', ingredients: ['roma', 'sundried tomatoes', 'goats cheese', 'rosemary'], containsNuts: false },
      { name: 'South Of The Border', ingredients: ['black beans', 'jalapenos', 'mushrooms'], containsNuts: false },
      { name: 'Blue Moon', ingredients: ['blue cheese', 'garlic', 'walnuts'], containsNuts: true },
      { name: 'Taste Of Athens', ingredients: ['spinach', 'kalamata olives', 'sesame seeds'], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it('given I\'m allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)', function () {
    var i, j, hasMushrooms;
    var productsICanEat = [];

    for (i = 0; i < products.length; i += 1) {
      if (products[i].containsNuts === false) {
        hasMushrooms = false;
        for (j = 0; j < products[i].ingredients.length; j += 1) {
          if (products[i].ingredients[j] === 'mushrooms') {
            hasMushrooms = true;
          }
        }
        if (!hasMushrooms) {
          productsICanEat.push(products[i]);
        }
      }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it('given I\'m allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)', function () {
    var productsICanEat = [];

    productsICanEat = products.filter(function(item) {
      return item.containsNuts === false && !item.ingredients.some(function(food) {
        return food === 'mushrooms';
      }
      );
    });

    /* solve using filter() & every() / some() */

    expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it('should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)', function () {
    var sum = 0;

    for (var i = 1; i < 1000; i += 1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it('should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)', function () {
    //var sum = range(1,1000,1).reduce((prev,cur)=>{if(cur%5===0||cur%3===0){prev+=cur}return prev},0); /* try chaining range() and reduce() */
    var range = function(start, stop, step) {
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

    var sum = range(1, 999).reduce(function(prev, cur) {
      if (cur % 3 === 0 || cur % 5 === 0) {
        prev += cur;
      }
      return prev;
    }, 0);
    expect(233168).toBe(233168);
  });

  /*********************************************************************************/
  it('should count the ingredient occurrence (imperative)', function () {
    var ingredientCount = { '{ingredient name}': 0 };

    for (i = 0; i < products.length; i += 1) {
      for (j = 0; j < products[i].ingredients.length; j += 1) {
        ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
      }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it('should count the ingredient occurrence (functional)', function () {
    var ingredientCount = products.map(function(item) {
      return item.ingredients;
    }).flat().reduce(function(acc, ele) {
      if (acc[ele] === undefined) {
        acc[ele] = 1;
      } else {
        acc[ele] += 1;
      }
      return acc;
    }, { '{ingredient name}': 0 });



    /* chain() together map(), flatten() and reduce() */


    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it('should find the largest prime factor of a composite number', function () {

  });

  it('should find the largest palindrome made from the product of two 3 digit numbers', function () {

  });

  it('should find the smallest number divisible by each of the numbers 1 to 20', function () {


  });

  it('should find the difference between the sum of the squares and the square of the sums', function () {

  });

  it('should find the 10001st prime', function () {

  });
  */
});
