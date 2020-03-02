import { Sorter } from './Sorter';

export class String extends Sorter {
  constructor(public letters: string) {
    super();
  }

  get length(): number {
    return this.letters.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftLetter = this.letters[leftIndex];
    const rightLetter = this.letters[rightIndex];

    return leftLetter.toLowerCase() > rightLetter.toLowerCase();
  }
}
