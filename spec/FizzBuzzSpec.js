describe('FizzBuzz', function(){

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('Knows that a number', function(){

    it('is divisible by 3', function(){
        expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('is divisible by 5', function() {
        expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });

    it('is divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFive(14)).toBe(false);
    });

  });

  describe('Also knows when a number', function() {

    it('is not divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('is not divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });

    it('is not divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFive(14)).toBe(false);
    });

  });

  describe('On counting up one at a time', function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when a number is divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });

    it('returns the number if its not divisible by 3, 5 or 15', function() {
      expect(fizzbuzz.says(13)).toEqual(13);
    });

  });

});
