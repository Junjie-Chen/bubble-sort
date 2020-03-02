import { Sorter } from './Sorter';

export class Array extends Sorter {
  constructor(public numbers: number[]) {
    super();
  }

  get length(): number {
    return this.numbers.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftNumber = this.numbers[leftIndex];
    const rightNumber = this.numbers[rightIndex];

    return leftNumber > rightNumber;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNumber = this.numbers[leftIndex];

    this.numbers[leftIndex] = this.numbers[rightIndex];
    this.numbers[rightIndex] = leftNumber;
  }
}
