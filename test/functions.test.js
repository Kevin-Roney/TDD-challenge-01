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

    const actual2 = addExclamationPoints('walrus');

    expect.equal(expected2, actual2, 'walrus plus !!! equals walrus!!!');

    const expected3 = 'radical!!!!!!';

    const actual3 = addExclamationPoints('radical!!!');

    expect.equal(expected3, actual3, 'radical!!! plus !!! equals radical!!!!!!');
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

    const expected2 = 14;

    const actual2 = multiplyBySeven(2);

    expect.equal(expected2, actual2, '2 times 7 equals 14');

    const expected3 = 28;

    const actual3 = multiplyBySeven(4);

    expect.equal(expected3, actual3, '4 times 7 equals 28');
});

test('this test multiplies num by 12 and then halves', (expect) => {
    const expected = 6;

    const actual = multiplyBy12ThenHalve(1);

    expect.equal(actual, expected, '1 times 12 divided by 2 equals 6');

    const expected2 = 12;

    const actual2 = multiplyBy12ThenHalve(2);

    expect.equal(actual2, expected2, '2 times 12 divided by 2 equals 12');

    const expected3 = 18;

    const actual3 = multiplyBy12ThenHalve(3);

    expect.equal(actual3, expected3, '3 times 12 divided by 2 equals 18');
});

test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 6;

    const actual = divideThenMultiply(4, 2, 3);

    expect.equal(actual, expected, '4 divided by 2 times 3 equals 6');

    const expected2 = 12;

    const actual2 = divideThenMultiply(8, 4, 6);

    expect.equal(actual2, expected2, '8 divided by 4 times 6 equals 12');

    const expected3 = 18;

    const actual3 = divideThenMultiply(9, 3, 6);

    expect.equal(actual3, expected3, '9 divided by 3 times 6 equals 18');
});

test('This function should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [3, 4, 5];

    const actual = returnAsAnArray(3, 4, 5);

    expect.deepEqual(actual, expected, 'should take 3, 4 , 5 and return [3, 4, 5]');

    const expected2 = [8, 8, 8];

    const actual2 = returnAsAnArray(8, 8, 8);

    expect.deepEqual(actual2, expected2, 'should take 8, 8 , 8 and return [8, 8, 8]');

    const expected3 = [12, 14, 0];

    const actual3 = returnAsAnArray(12, 14, 0);

    expect.deepEqual(actual3, expected3, 'should take 8, 8 , 8 and return [12, 14, 0]');
});

test('This function should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '3,4,5';

    const actual = returnAsAString(3, 4, 5);

    expect.deepEqual(actual, expected, '3, 4, 5 mushed together as a string is "3,4,5"');

    const expected2 = '8,8,8';

    const actual2 = returnAsAString(8, 8, 8);

    expect.deepEqual(actual2, expected2, '8, 8, 8 mushed together as a string is "8,8,8"');

    const expected3 = '0,9,0';

    const actual3 = returnAsAString(0, 9, 0);

    expect.deepEqual(actual3, expected3, '0, 9, 0 mushed together as a string is "0,9,0"');
});

test('This function should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 5';

    const actual = makeLuckyGreeting(2, 3);

    expect.deepEqual(actual, expected, 'returns Hello! Your lucky number for the day is (2 + 3) which equals 5');

    const expected2 = 'Hello! Your lucky number for the day is 8';

    const actual2 = makeLuckyGreeting(4, 4);

    expect.deepEqual(actual2, expected2, 'returns Hello! Your lucky number for the day is (4 + 4) which equals 8');

    const expected3 = 'Hello! Your lucky number for the day is 100';

    const actual3 = makeLuckyGreeting(60, 40);

    expect.deepEqual(actual3, expected3, 'returns Hello! Your lucky number for the day is (40 + 60) which equals 100');
});

test('This function should take an array and return the second item in the array', (expect) => {
    const expected = 5;

    const actual = getSecondItem([4, 5, 6, 8]);

    expect.deepEqual(actual, expected, 'returns 5 since 5 is the second number in the array');

    const expected2 = 10;

    const actual2 = getSecondItem([30, 10, 80, 90]);

    expect.deepEqual(actual2, expected2, 'returns 10 since 5 is the second number in the array');

    const expected3 = 'walnuts';

    const actual3 = getSecondItem(['almonds', 'walnuts', 'hazelnuts', 'macadamia nuts']);

    expect.deepEqual(actual3, expected3, 'returns walnuts since walnuts is the second item in the array');
});