class CodersArray {
  length;

  constructor(...arg) {
    let index = 0;

    for (const argument of arg) {
      this[index++] = argument;
    }

    this.length = index;
  }

  push(...arg) {
    let counter = this.length;
    for (const argument of arg) {
      this[counter++] = argument;
      this.length++;
    }
  }
}

export default CodersArray;
