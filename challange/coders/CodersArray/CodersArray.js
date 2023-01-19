class CodersArray {
  constructor(...arg) {
    let index = 0;

    for (const argument of arg) {
      this[index++] = argument;
    }
  }
}

export default CodersArray;
