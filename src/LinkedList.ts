class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList {
  head: Node | null = null;
}
