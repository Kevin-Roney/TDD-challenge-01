// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, 
} from '../functions.js';

const { test, skip } = QUnit;

test('this test add exclamation points to string', (expect) => {
    const expected = 'bunny!!!';

    const actual = addExclamationPoints('bunny');

    expect.equal(actual, expected, 'bunny plus !!! equals bunny!!!');

    const expected2 = 'walrus!!!';

    const actual2 = 'walrus!!!';
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test multiplies num by 7', (expect) => {
    const expected = 21;

    const actual = multiplyBySeven(3);

    expect.equal(actual, expected, '3 times 7 equals 21');
});

test('this test multiplies num by 12 and then halves', (expect) => {
    const expected = 6;

    const actual = multiplyBy12ThenHalve(1);

    expect.equal(actual, expected, '1 times 12 divided by 2 equals 6');
});

test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 6;

    const actual = divideThenMultiply(4, 2, 3);

    expect.equal(actual, expected, '4 divided by 2 times 3 equals 6');
});

test('This function should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [3, 4, 5];

    const actual = returnAsAnArray(3, 4, 5);

    expect.deepEqual(actual, expected, 'should take number inputs and put them into an array');
});

test('This function should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [3, 4, 5];

    const actual = returnAsAnArray(3, 4, 5);

    expect.deepEqual(actual, expected, 'should take number inputs and put them into an array');
});