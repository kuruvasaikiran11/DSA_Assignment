class Stack{
    constructor(){
        this.items = [];
        this.length = 0;
    }
    push(val){
        this.items[this.length] = val;
        this.length++;
    }
    pop(){
        if (this.length === 0) {
            return undefined; // Return undefined for an empty stack
          }
          this.length--;
          return this.items.pop();
    }
    isEmpty(){
        return this.length == 0;
    }
    reverse(){
        for(let i = 0; i < this.length / 2; i++){
            let temp = this.items[i];
            this.items[i] = this.items[this.length - i - 1];
            this.items[this.length - i - 1] = temp;
        }
    }
}

let stack = new Stack();
stack.push(10);
stack.push(12);
stack.push(3);
stack.push(40);

stack.reverse()
console.log(stack.items);