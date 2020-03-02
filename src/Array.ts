import { Sorter } from './Sorter';

export class Array extends Sorter {
  constructor(public numbers: number[]) {
    super();
  }

  get length(): number {
    return this.numbers.length;
  }
}
