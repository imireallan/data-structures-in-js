class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    push(val) {
        // adds a node at the end of the list
        const newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    shift(val) {
        // adds a node at the beginning of the list
        const newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        // removes a node at the end of the list
        if (!this.head) return null;
        let current = this.head;
        let prevNode = current;
        while (current.next) {
            prevNode = current;
            current = current.next;
        }
        prevNode.next = null;
        this.tail = prevNode;
        this.length--;
        return current;
    }
    unshift() {
        // removes a node at the beginning of a list
        if (!this.head) return null;
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current;
    }
    get(position) {
        // returns a node given its position
        if (!this.head) return null;
        if (position === 0) return this.head;
        if (position === this.length - 1) return this.tail;
        if (position < 0 || position >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count !== position) {
            current = current.next;
            count++;
        }
        return current;
    }
    set(position, val) {
        // updates the value of a node given its position
        const foundNode = this.get(position);
        foundNode.val = val;
        return foundNode;
    }
    insert(position, val) {
        // inserts a node at a position
        if (position === 0 || !this.head) return !!this.shift(val);
        if (position === this.length - 1 || !this.head) return !!this.push(val);

        const newNode = new Node(val);
        const prevNode = this.get(position - 1);
        let currentNode = prevNode.next;
        newNode.next = currentNode;
        prevNode.next = newNode;
        this.length++;
        return true;
    }
    delete(position) {
        // deletes a node given its position in the list
        if (position === 0) return this.unshift();
        if (position === this.length - 1) return this.pop();

        const prevNode = this.get(position - 1);
        let currentNode = prevNode.next;
        prevNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }
    reverse() {
        if (!this.head) return undefined;
        if (this.length === 1) return this.head;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        while (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

module.exports = SinglyLinkedList;
