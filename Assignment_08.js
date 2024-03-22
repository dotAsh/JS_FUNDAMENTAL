
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}


function makePassword(password) {
    return function(guess) {
        return guess === password;
    };
}


function counterWithStep(step = 1) {
    let count = 0;
    return function() {
        count += step;
        return count;
    };
}


const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

const checkPassword = makePassword("mySecretPassword");
console.log(checkPassword("password123")); // Output: false
console.log(checkPassword("mySecretPassword")); // Output: true

const incrementByThree= counterWithStep(3);
console.log(incrementByThree()); // Output: 3
console.log(incrementByThree()); // Output: 6
