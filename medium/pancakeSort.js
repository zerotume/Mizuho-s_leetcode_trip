/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var pancakeSort = function(arr) {
    debugger;
    let divider = arr.length - 1;
    let sorted = [...arr];
    sorted.sort(((a,b) => a - b));
    let flips = [];
    while(sorted.join(',') !== arr.join(',')){
        let pos = arr.indexOf(sorted[divider]);
        let flip = undefined;
        if(pos === 0){
            flip = divider + 1;
            divider --;
        }else if(pos !== divider){
            flip = pos + 1;
        }else{
            divider --;
        }
        if(flip !== undefined){
            arr = [...arr.slice(0, flip).reverse(), ...arr.slice(flip)];
            flips.push(flip);
        }

    }

    return flips;
};


// let nyan = [2,1,3];
// console.log(pancakeSort(nyan));

// First attempt:
// Runtime: 144 ms, faster than 9.46% of JavaScript online submissions for Pancake Sorting.
// Memory Usage: 48.6 MB, less than 8.11% of JavaScript online submissions for Pancake Sorting.
// ??????????????????????WOC???????????????????YO&^%&&^E$*^&&^&*%$^
