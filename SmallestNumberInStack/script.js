class Stack{
    constructor(){
        this.items = [];
        this.minStack = [];
        this.length = 0;
    }
    push(val){
        this.items.push(val);
        this.length++;
        // Update the minimum stack with the new minimum value if necessary
        if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
        ) {
        this.minStack.push(val);
        }

    }
    pop(){
          if (this.stack.length === 0) {
            return undefined;
          }
          this.length--;
          const popped = this.stack.pop();
      
          // Update the minimum stack if the popped value is the minimum
          if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
          }
      
          return popped;
    }
    isEmpty(){
        return this.length == 0;
    }
    getMin() {
        if (this.minStack.length === 0) {
            return undefined;
          }
          return this.minStack[this.minStack.length - 1];
      }
}

let stack = new Stack();
stack.push(10);
stack.push(1);
stack.push(3);
stack.push(10);

const min = stack.getMin();
console.log(min);