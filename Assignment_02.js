
function bubbleSort(arr) {
    let n = arr.length;
    let newn;
    while (n > 1) {
        newn = 0;
        for (let j = 1; j < n; j++) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                newn = j;
            }
        }
        n = newn;
    }
    return arr
}
function sortNumsAscending(array){
    if(arguments.length == 0 || !Array.isArray(array) || array.length == 0){
        return []
    }
    for(let i = 0;i < array.length;i++){
        if(typeof array[i] != 'number'){
            return [];
        }
    }

    bubbleSort(array);
    return array;
}


console.log(sortNumsAscending()); // []
console.log(sortNumsAscending(["a", "n", "g"])); // []
console.log(sortNumsAscending([5, "4", 3, 1, 7])); // []
console.log(sortNumsAscending([45, 34, 23, 12, 7])); // [7, 12, 23, 34, 45]

