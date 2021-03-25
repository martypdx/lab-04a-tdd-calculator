import { add, subtract, multiply, divide } from './calculator.js';
import { toNumber } from './dom-utils.js';

function init(input1Id, input2Id, buttonId, displayId, operation) {
    const input1 = document.getElementById(input1Id);
    const input2 = document.getElementById(input2Id);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(displayId);
    
    button.addEventListener('click', () => {
        const x = toNumber(input1);
        const y = toNumber(input2);
        display.textContent = operation(x, y);
    });
}

init('addend-one', 'addend-two', 'add-button', 'sum-display', add);
init('minuend', 'subtrahend', 'subtract-button', 'difference-display', subtract);
init('multiplicand', 'multiplier', 'multiply-button', 'product-display', multiply);
init('dividend', 'divisor', 'divide-button', 'quotient-display', divide);


// const operations = [
//     {
//         input1Id: 'addend-one',
//         input2Id: 'addend-two',
//         buttonId: 'add-button',
//         displayId: 'sum-display',
//         action: add
//     },
//     {
//         input1Id: 'minuend',
//         input2Id: 'subtrahend',
//         buttonId: 'subtract-button',
//         displayId: 'difference-display',
//         action: subtract
//     },
//     {
//         input1Id: 'multiplicand',
//         input2Id: 'multiplier',
//         buttonId: 'multiply-button',
//         displayId: 'product-display',
//         action: multiply
//     },
//     {
//         input1Id: 'dividend',
//         input2Id: 'divisor',
//         buttonId: 'divide-button',
//         displayId: 'quotient-display',
//         action: divide
//     },
// ];

// for (let i = 0; i < operations.length; i++) {
//     const op = operations[i];
//     init(
//         op.input1Id,
//         op.input2Id,
//         op.buttonId,
//         op.displayId,
//         op.action
//     );
// }
