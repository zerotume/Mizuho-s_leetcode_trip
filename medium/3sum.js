/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let pos = [];
    let neg = [];
    let zeroNum = 0;
    let res = [];
    let added = new Set();

    for(let num of nums){
        if(num > 0){
            pos.push(num)
        }else if(num < 0){
            neg.push(num)
        }else{
            zeroNum ++;
        }
    }
    let pSet = new Set(pos);
    let nSet = new Set(neg);

    if(zeroNum >= 1){
        for(let ele of pSet){
            if(nSet.has(-ele)){
                res.push([-ele,0,ele]);
            }
        }
    }
    if(zeroNum > 2){
        res.push([0,0,0])
    }

    for(let i = 0; i < pos.length; i++){
        for(let j = i+1; j < pos.length; j++){
            if(nSet.has(-pos[i]-pos[j])){
                let cur = [pos[i],pos[j],-pos[i]-pos[j]].sort((a,b) => a-b);
                let curJson = JSON.stringify(cur);
                if(!added.has(curJson)){
                    added.add(curJson);
                    res.push(cur);
                }
            }
        }
    }

    for(let i = 0; i < neg.length; i++){
        for(let j = i+1; j < neg.length; j++){
            if(pSet.has(-neg[i]-neg[j])){
                let cur = [neg[i],neg[j],-neg[i]-neg[j]].sort((a,b) => a-b);
                let curJson = JSON.stringify(cur);
                if(!added.has(curJson)){
                    added.add(curJson);
                    res.push(cur);
                }
            }
        }
    }

    return Array.from(res);

};


// Runtime: 361 ms, faster than 24.51% of JavaScript online submissions for 3Sum.
// Memory Usage: 57.6 MB, less than 18.06% of JavaScript online submissions for 3Sum.
// very bad solution, distracted by the case of JavaScript array comparision
// which means that the JSON.stringify takes too much time, I guess
// will try two pointer later.
