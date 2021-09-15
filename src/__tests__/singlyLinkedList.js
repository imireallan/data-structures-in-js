const { expect } = require("chai");
const SinglyLinkedList = require("../singlyLinkedList");

describe("SinglyLinkedList", () => {
    let ll;
    let val;
    beforeEach(() => {
        ll = new SinglyLinkedList();
        val = 23;
    });
    it("should add a node at the end of a list", () => {
        ll.push(val);
        ll.push(10);
        expect(ll.length).to.equal(2);
        expect(ll.tail.val).to.equal(10);
        expect(ll.tail.val).not.equal(val);
    });
    it("should add a node at the beginning the list", () => {
        ll.shift(val);
        ll.shift(24);
        expect(ll.length).to.equal(2);
        expect(ll.head.val).to.equal(24);
        expect(ll.head.val).not.equal(val);
    });
    it("should remove a node at the end of the list", () => {
        ll.push(val);
        ll.push(24);
        let removedNode = ll.pop();
        expect(ll.length).to.equal(1);
        expect(removedNode.val).to.equal(24);
    });
    it("should remove a node at the beginning of the list", () => {
        ll.shift(val);
        ll.shift(24);
        let removedNode = ll.unshift();
        expect(ll.length).to.equal(1);
        expect(removedNode.val).to.equal(24);
    });
    it("should return a node given it's position in the list", () => {
        ll.shift(val);
        ll.shift(24);
        ll.shift(25);
        let returnedNode = ll.get(2);
        expect(returnedNode.val).to.equal(val);
    });
    it("should update a node given it's position in the list", () => {
        ll.push(val);
        ll.push(24);
        ll.push(25);
        let foundNode = ll.set(1, 40);
        expect(foundNode.val).to.equal(40);
        expect(foundNode.val).not.equal(val);
    });
    it("should insert a node given it's position in the list", () => {
        ll.push(val);
        ll.push(24);
        ll.push(25);
        const isSuccessfull = ll.insert(1, 55);
        const insertedNode = ll.get(1);
        expect(isSuccessfull).to.equal(true);
        expect(insertedNode.val).to.equal(55);
        expect(ll.length).to.equal(4);
    });
    it("should delete a node given it's position in the list", () => {
        ll.push(val);
        ll.push(24);
        ll.push(25);
        const deletedNode = ll.delete(1);
        expect(deletedNode.val).to.equal(24);
        expect(ll.length).to.equal(2);
    });
    it("should reverse the list", () => {
        ll.push(val);
        ll.push(25);
        ll.push(26);
        ll.reverse();
        expect(ll.head.val).to.equal(26);
        const secondNode = ll.get(1);
        expect(secondNode.val).to.equal(25);
        const thirdNode = ll.get(2);
        expect(thirdNode.val).to.equal(val);
    });
});
