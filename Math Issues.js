/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()
*/

Math.round = function(number) {
  number = String(number);
  number = number.split(".");
  if (number[1] !== undefined){
    if (+(number[1][0]) >= 5){
      return (+number[0] + 1);
    }  
  }
  
  return +number[0];
};

Math.ceil = function(number) {
  number = String(number);
  number = number.split(".");
  if (number[1] !== undefined){
    if (+(number[1]) > 0){
      return (+number[0] + 1);
    }  
  }
  
  return +number[0];
};

Math.floor = function(number) {
  number = String(number);
  number = number.split(".");
  return +number[0]; // TODO: fix this
};
