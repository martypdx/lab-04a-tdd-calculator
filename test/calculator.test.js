// IMPORT MODULES under test here:
import { add } from '../calculator.js';

const test = QUnit.test;

test('add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // inputs?
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// test('subtract', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     // inputs?
//     const x = 11;
//     const y = 2;
//     const expected = 9;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = 

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
