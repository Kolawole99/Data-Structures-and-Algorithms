class LinkedList {
    constructor() {
        this.head = null; //First list element
        this.tail = null; //Last list element
    }

    get() {
        const linkedListItems = [];
        let currentNode = this.head;
        while (currentNode) {
            linkedListItems.push(currentNode);
            currentNode = currentNode.next;
        }
        return linkedListItems;
    }

    prepend(item) {
        const newNode = {
            value: item,
            next: this.head,
        };
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    append(item) {
        const newNode = {
            value: item,
            next: null,
        };
        if (!this.head) {
            this.head = newNode;
        }
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    find(item) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.next.value === item) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    insertAfter(item, afterValue) {
        const existingNode = this.find(afterValue);
        if (existingNode) {
            const newNode = { value: item, next: existingNode.next };
            existingNode.next = newNode;
        }
    }

    delete(item) {
        if (!this.head) {
            return;
        }
        while (this.head && this.head.value === item) {
            this.head = this.head.next;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === item) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (this.tail.value === item) {
            this.tail = currentNode;
        }
    }
}
