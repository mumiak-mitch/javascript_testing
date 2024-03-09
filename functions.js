const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
    return str.split('').reverse().join('');
};

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

const caesarCipher = (str, shift) => {
    return str
        .split('')
        .map((char) => {
            if (char.match(/[a-zA-Z]/)) {
                const isUpperCase = char === char.toUpperCase();
                const charCode = char.charCodeAt(0);
                const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                const shiftedCharCode = ((charCode - base + shift) % 26 + 26) % 26 + base;
                return String.fromCharCode(shiftedCharCode);
            } else {
                return char;
            }
        })
        .join('');
};

const analyzeArray = (arr) => {
    if (arr.length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0,
        };
    }

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        average,
        min,
        max,
        length: arr.length,
    };
};

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};