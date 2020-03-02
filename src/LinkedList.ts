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
}
