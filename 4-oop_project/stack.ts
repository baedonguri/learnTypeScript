/**
 * 객체 지향으로 stack 구현하기
 */

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

export class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is Full!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    if (this.head == null) {
      // null == undefined, null !== undefined
      throw new Error("Stack is Emtpy!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push("1.donguri");
stack.push("2.aiden");
stack.push("3.lemon");
stack.push("4.cloud");

while (stack.size != 0) {
  console.log(stack.pop());
}

// stack.pop();
