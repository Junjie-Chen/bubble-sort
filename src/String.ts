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

  swap(leftIndex: number, rightIndex: number): void {
    const letters = this.letters.split('');

    const leftLetter = letters[leftIndex];

    letters[leftIndex] = letters[rightIndex];
    letters[rightIndex] = leftLetter;

    this.letters = letters.join('');
  }
}
