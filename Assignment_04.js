
function checkEnding(str1, str2) {
    if(str1.length  < str2.length){
        return false;
    }
    let i = str1.length - 1;
    for(let j = str2.length - 1;j >= 0;j--){
        if(str1[i] !== str2[j]){
            return false;
        }
        i--;
    }
    return true;
}

console.log(checkEnding("samurai", "zi")); // false