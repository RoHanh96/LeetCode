/** https://leetcode.com/problems/maximum-frequency-stack/ */

var FreqStack = function() {
  this.freqStack = [];
  this.freqMap = new Map();
  this.max = 0;
};

/** 
* @param {number} x
* @return {void}
*/
FreqStack.prototype.push = function(x) {
  const currentFreq = this.freqMap.get(x) || 0;
  if(!this.freqStack[currentFreq+1]) {
      this.freqStack[currentFreq+1] = [];
  }
 
  this.freqStack[currentFreq+1].push(x);
  this.freqMap.set(x, currentFreq+1)
  this.max = Math.max(this.max, currentFreq+1);
};

/**
* @return {number}
*/
FreqStack.prototype.pop = function() {
  const x =  this.freqStack[this.max].pop();
  if(this.freqStack[this.max].length == 0) {
      this.max--;
  }
  
  this.freqMap.set(x, this.freqMap.get(x) - 1);
  
  return x;
  
};


/** 
* Your FreqStack object will be instantiated and called as such:
* var obj = new FreqStack()
* obj.push(x)
* var param_2 = obj.pop()
*/