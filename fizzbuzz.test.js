const fizzBuzz = require('./fizzbuzz');
// const fizzbuzzUntil = require('./fizzbuzz');


describe('fizzBuzz', () => {
    it('returns fizz if num % 3 === 0', () => {
        expect(fizzBuzz(9)).toBe("fizz");
    });

    it('returns buzz if num % 5 === 0', () => {
        expect(fizzBuzz(10)).toBe("buzz");
    });

    it('returns fizzbuzz if num % 3 === 0 && num % 5 === 0', () => {
        expect(fizzBuzz(15)).toBe("fizzbuzz");
    });
  });