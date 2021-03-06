import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(value: number): void {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let tail = this.head;

      while (tail.next) {
        tail = tail.next;
      }

      tail.next = node;
      tail = node;
    }
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;

    let node = this.head;

    while (node.next) {
      length++;

      node = node.next;
    }

    return length;
  }

  search(index: number): Node {
    if (!this.head) {
      throw new Error('Linked list is empty.');
    }

    let counter = 0;

    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;

      node = node.next;
    }

    throw new Error('Node can not be found.');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('Linked list is empty.');
    }

    const leftNode = this.search(leftIndex);
    const rightNode = this.search(rightIndex);

    return leftNode.value > rightNode.value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.search(leftIndex);
    const rightNode = this.search(rightIndex);

    const leftValue = leftNode.value;

    leftNode.value = rightNode.value;
    rightNode.value = leftValue;
  }

  log(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.value);

      node = node.next;
    }
  }
}
