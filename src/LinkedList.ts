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
}
