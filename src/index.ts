import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";

const numbersCollection = new NumbersCollection([12, 43, 14, 64, 34, 47, 97, 93, 41, 54, 32, 17, 36, 4, 39, 66, 86, 9, 95, 94])
const characterCollection = new CharacterCollection('qwerTyuiopasDfghjklZxcvbnm');
const sorter = new Sorter(numbersCollection);
const sorter2 = new Sorter(characterCollection);

sorter.sort();
sorter2.sort();

console.log(numbersCollection.data);
console.log(characterCollection.data);
