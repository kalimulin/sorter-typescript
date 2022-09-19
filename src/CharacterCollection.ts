export class CharacterCollection {
  constructor( public characters: string) {}

  get length(): number {
    return this.characters.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.characters[leftIndex] > this.characters[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    this.characters =  this.characters.slice(0, leftIndex - 1) + this.characters[rightIndex] + this.characters[leftIndex] + this.characters.slice(rightIndex + 1);
    console.log(this.characters);
  }
}