/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let stack = [];
    let symbol = {
        "+":true,
        "-":true,
        "*":true,
        "/":true
    };

    for(let ele of tokens){
        if(symbol[ele]){
            let second = parseInt(stack.pop());
            let first = parseInt(stack.pop());
            let res = 0;
            switch(ele){
                case "+":
                    res = first + second;
                    break;
                case "-":
                    res = first - second;
                    break;
                case "*":
                    res = first * second;
                    break;
                case "/":
                    res = first / second;
                    break;
                default:
                    res = 0;
            }
            stack.push(res.toString());
        }else{
            stack.push(ele);
        }
    }
    return parseInt(stack[0]);
};

// Runtime: 135 ms, faster than 26.08% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// Memory Usage: 45.4 MB, less than 43.28% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// WAT?
// MY GRANDMOTHER RUNS FASTER THAN MY CODE!
