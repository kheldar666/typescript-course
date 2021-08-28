import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumbersCollection([10, 5, -5, 0]);
const chars = new CharacterCollection("dùvlbqnrz *,oVKNQDÙovb^^' vùc ùfQONFn");
const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-10);
linkedList.add(75);
linkedList.add(-3);

numbers.sort();
console.log(numbers.data);

chars.sort();
console.log(chars.data);

linkedList.sort();
linkedList.print();
