function doubleChar(str) {
    if (str === undefined || typeof str !== 'string') {
        return null;
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}

console.log(doubleChar('exercise'));
