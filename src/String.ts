import { Sorter } from './Sorter';

export class String extends Sorter {
  constructor(public letters: string) {
    super();
  }

  get length(): number {
    return this.letters.length;
  }
}
