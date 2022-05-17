//Nevermind this one
//Just want to try something interesting

function radixSort(arr){
    let max = Math.max(...arr);
    let radixLen = max.toString().length;
    for(i = 0; i < radixLen; i++){
        arr.sort((a,b) => {
            return (a.toString()[i]? a.toString()[i] : 0) - (b.toString()[i]? b.toString()[i] : 0);
        })
    }
    return arr;
}

let nyan = [121, 432, 564, 23, 1, 45, 788];
console.log(radixSort(nyan));
