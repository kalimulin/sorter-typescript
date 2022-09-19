"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(characters) {
        this.characters = characters;
    }
    get length() {
        return this.characters.length;
    }
    compare(leftIndex, rightIndex) {
        return this.characters[leftIndex] > this.characters[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        this.characters = this.characters.slice(0, leftIndex - 1) + this.characters[rightIndex] + this.characters[leftIndex] + this.characters.slice(rightIndex + 1);
        console.log(this.characters);
    }
}
exports.CharacterCollection = CharacterCollection;
