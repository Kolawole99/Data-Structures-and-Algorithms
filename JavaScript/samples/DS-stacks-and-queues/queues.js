class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    isEmpty() {
        return this.tailIndex - this.headIndex === 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue() {
        if (this.isEmpty()) return "Empty Queue";

        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }

    peek() {
        if (this.isEmpty()) return "Empty Queue";

        return this.items[this.headIndex];
    }

    get length() {
        return this.tailIndex - this.headIndex;
    }
}

const queue = new Queue();

console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.peek());

queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(4);

console.log(queue.length);
queue.dequeue();
console.log(queue.peek());
console.log(queue.length);
console.log(queue.isEmpty());
