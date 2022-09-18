class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j+1]) {
          const temp = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = temp;
        }
      }
    }
  }
}

const sorter = new Sorter([12, 43, 14, 64, 4, 47, 97, 93, 41, 54, 32, 17, 36, 4, 39, 66, 86, 9, 95, 54, 38, 31, 39, 39, 12, 35, 17, 55, 47, 45, 19, 50, 34, 6, 15, 99, 89, 6, 41, 29, 38, 8, 58, 0, 96, 82, 10, 37, 67, 62, 94, 37, 82, 32, 36, 81, 99, 90, 94, 7, 66, 73, 96, 14, 90, 94, 85, 1, 91, 54, 76, 45, 25, 43, 10, 26, 5, 54, 29, 84, 89, 61, 27, 37, 87, 80, 95, 43, 50, 46, 66, 8, 72, 17, 44, 92, 42, 57, 29, 74]);
sorter.sort();
console.log(sorter.collection);
