import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([12, 43, 14, 64, 34, 47, 97, 93, 41, 54, 32, 17, 36, 4, 39, 66, 86, 9, 95, 94])
const characterCollection = new CharacterCollection('qwerTyuiopasDfghjklZxcvbnm');

const linkedList = new LinkedList();
linkedList.add(12);
linkedList.add(43);
linkedList.add(14);
linkedList.add(64);
linkedList.add(34);
linkedList.add(47);

numbersCollection.sort();
characterCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(characterCollection.data);
linkedList.print();