class CodersArray {
  length;

  constructor(...arg) {
    let index = 0;

    for (const argument of arg) {
      this[index++] = argument;
    }

    this.length = index;
  }
}

export default CodersArray;
