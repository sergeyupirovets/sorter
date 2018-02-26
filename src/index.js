class Sorter {
  constructor() {
    // your implementation
     this.elements = [];
  }

  add(element) {
    // your implementation
    this.elements.push(element);
  }

  at(index) {
    // your implementation
    return this.elements[index];
  }

  get length() {
    // your implementation
     return this.elements.length;
  }

  toArray() {
    // your implementation
    return this.elements;
  }

  sort(indices) {
    // your implementation
    let tempArr = [];
    let tempArr2 = [];
    let tempArr3 = [];
    indices.forEach((el) => {
      if (this.elements[el]) {
        tempArr.push(this.elements[el]);
      }
    });
    tempArr.sort();
     for (let i=0; i<indices.length; i++) {
       this.elements[indices[i]] = tempArr[i]
     }
    // this.elements = tempArr;
  }

  setComparator(compareFunction) {
    //
    // let tempArr = [];
    // // your implementation
    // tempArr.sort();
    // this.elements.sort();
  }
}

module.exports = Sorter;
