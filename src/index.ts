import { Array } from './Array';
import { String } from './String';
import { LinkedList } from './LinkedList';

const array = new Array([10, 5, 0, 0, -5, -10]);

array.sort();

console.log(array.numbers);

const string = new String('ZyXwVu');

string.sort();

console.log(string.letters);

const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(5);
linkedList.add(0);
linkedList.add(0);
linkedList.add(-5);
linkedList.add(-10);

linkedList.sort();
