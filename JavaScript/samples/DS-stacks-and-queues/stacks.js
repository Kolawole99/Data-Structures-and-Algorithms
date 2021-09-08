class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    peek() {
        return this.storage[this.count - 1];
    }

    get length() {
        return this.count;
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push("name");
myStack.push("valuePair");
console.log(myStack.peek());
console.log(myStack.length);
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.length);
