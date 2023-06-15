// file: add.test.js
const add = require('./add');
const multiply = require('./add');


describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2, 2)).toBe(4);
    });
    it('adds 2 and 3', () => {
        expect(add(2, 3)).not.toBe(4);
    });
  });

