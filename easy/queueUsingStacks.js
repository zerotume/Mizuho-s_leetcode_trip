
var MyQueue = function() {
    this.stack = [];
    this.helperStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack.length){
        this.helperStack.push(this.stack.pop());
    }
    let target = this.helperStack.pop();
    while(this.helperStack.length){
        this.stack.push(this.helperStack.pop());
    }
    return target;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let final;
    while(this.stack.length){
        final = this.stack.pop();
        this.helperStack.push(final);
    }
    while(this.helperStack.length){
        this.stack.push(this.helperStack.pop());
    }
    return final;

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

//  Runtime: 149 ms, faster than 5.31% of JavaScript online submissions for Implement Queue using Stacks.
//  Memory Usage: 41.8 MB, less than 78.90% of JavaScript online submissions for Implement Queue using Stacks.
//  Some solutions using built-in Array methods lmao
