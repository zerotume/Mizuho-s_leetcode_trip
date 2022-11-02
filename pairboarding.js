/*
const longestSubstringWithoutDuplication = (str) =>{
    // initialize two pointers

    let fast = 0;
    let slow = 0;
    let bestFast = 0;
    let bestSlow = 0;
    // set
    // let res = '';
    let record = new Set();
    // record.add(str[0]);
    // loop, iterating the sliding window
    while(fast < str.length){
        if(record.has(str[fast])){
            record.delete(str[slow]);
            slow++;
        }else{
            record.add(str[fast]);
            // res = res.length<(fast - slow + 1)?str.substring(slow,fast+1):res;
            if(bestFast - bestSlow + 1 < fast - slow + 1){
                bestFast = fast;
                bestSlow = slow;
            }
            fast++;
        }
    }
    return str.substring(bestSlow, bestFast+1);
        //check the duplication set is good
            //if not:
                //adding new character to the note set
                // compare with current longest result
                //newer is longer or same: update the result
                //else: keep the result
                //move the "fast pointer"
            //if yes:
                    //already inside? go to yes branch
                    //move the slow pointer
                    //remove from set
    //when right pointer+1 out of range, stop the loop
    // return our recoreded result
}

console.log(longestSubstringWithoutDuplication("aaaaa"));
 */
