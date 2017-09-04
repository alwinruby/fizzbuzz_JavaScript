describe('FizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('whilst playing it returns ', function() {

    it('"Fizz" if number is divisible by 3', function() {
      expect(fizzbuzz.game(6)).toEqual('Fizz');
    });

    it('"Buzz" if number is divisible by 5', function() {
      expect(fizzbuzz.game(10)).toEqual('Buzz');
    });

    it('"FizzBuzz" if number is divisible by 15', function() {
      expect(fizzbuzz.game(30)).toEqual('FizzBuzz');
    });

    it('the number if number is not divisible by 15, 5 or 3', function() {
      expect(fizzbuzz.game(1)).toEqual(1);
    });

  });

});
