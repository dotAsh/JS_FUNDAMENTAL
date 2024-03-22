

function sumOfSquares(arr) {

    let total = 0;
    for(let i = 0;i<arr.length;i++){
        total += (arr[i] * arr[i]);
    }
    return total;
}

function countEvenNumbers(arr) {
    let evenCount = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
            evenCount++;
        }
    }
    return evenCount;
}
 
function findMaximum(arr) {
    let maxNumber = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}

//  custom operation 
function customOperation(arr, callback) {
    let answer = []
    for(let i = 0;i<arr.length;i++){
        answer.push(callback(arr[i]));
    }
    return answer;
}

function calculate(arr, operation) {
    return operation(arr);
}

// Test 

let numbers = [1, 2, 3, 4, 5];

console.log("Sum of Squares:", calculate(numbers, sumOfSquares)); // Output: 55
console.log("Count Even Numbers:", calculate(numbers, countEvenNumbers)); // Output: 2
console.log("Find Maximum:", calculate(numbers, findMaximum)); // Output: 5
console.log("Custom Operation (Doubled):", customOperation(numbers, (num) => num * 2)); // Output: [2, 4, 6, 8, 10]

