
function minMaxLengthAverage(array){
    
    let arrayLength = array.length;
    if(arrayLength == 0){
        return [];
    }
    
    let result = []
    let minNumber = array[0];
    let maxNumber = array[0];
    let sum = array[0];

    // here i is stating from 1 , not zero 
    for(let i = 1;i < array.length;i++){
        if(array[i] < minNumber){
            minNumber = array[i]
        }
        if(array[i] > maxNumber){
            maxNumber = array[i]
        }

        sum += array[i]

    }
    let avg = sum / arrayLength;
    result.push(minNumber);
    result.push(maxNumber);
    result.push(arrayLength);
    result.push(avg);

    return result;
}

arr  = [7, 13, 3, 77, 100]
console.log(minMaxLengthAverage(arr));