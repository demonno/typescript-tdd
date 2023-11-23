export class Stack {
  private size: number;
  private elements: number[];
  constructor() {
    this.size = 0;
    this.elements = [];
  }

  push(value: number) {
    this.size += 1;
    this.elements[this.size] = value;
  }

  isEmpty(): boolean {
    return this.size == 0;
  }
  pop() {
    if (this.isEmpty()) throw new Error();

    const v = this.elements[this.size];
    this.size -= 1;
    return v;
  }
}
