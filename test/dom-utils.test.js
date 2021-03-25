import { toNumber } from '../dom-utils.js';

const test = QUnit.test;

test('toNumber', (expect) => {
    //Arrange
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('toNumber on empty string', (expect) => {
    //Arrange
    const expected = 0;
    const input = document.createElement('input');
    input.value = '';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
