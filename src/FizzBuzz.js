function FizzBuzz() {

}

FizzBuzz.prototype.game = function(num) {

  if (this.isDivisibleBy(15, num)) {
    return 'FizzBuzz';
  }

  if (this.isDivisibleBy(5, num)) {
    return 'Buzz';
  }

  if (this.isDivisibleBy(3, num)) {
    return 'Fizz';
  }

  return num;

};

FizzBuzz.prototype.isDivisibleBy = function (div, num) {
  return (num % div === 0);
};
