const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} = require('./functions'); // Make sure to replace './functions' with the actual path to your implementation file

// capitalize function
test('capitalize function capitalizes the first character', () => {
    expect(capitalize('hello')).toBe('Hello');
});

// reverseString function
test('reverseString function reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

// calculator object
describe('calculator object', () => {
    test('add function adds two numbers', () => {
        expect(calculator.add(3, 7)).toBe(10);
    });

    test('subtract function subtracts two numbers', () => {
        expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('multiply function multiplies two numbers', () => {
        expect(calculator.multiply(5, 2)).toBe(10);
    });

    test('divide function divides two numbers', () => {
        expect(calculator.divide(8, 2)).toBe(4);
    });
});

// caesarCipher function
test('caesarCipher function shifts characters correctly', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// analyzeArray function
test('analyzeArray function returns correct analysis', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});  