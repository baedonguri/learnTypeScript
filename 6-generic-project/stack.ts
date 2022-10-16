/**
 * 제네릭하게 stack 수정하기
 */

interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

export class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is Full!");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
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

const stack = new StackImpl<string>(10); // string으로 선언
stack.push("1.donguri");
stack.push("2.aiden");
stack.push("3.lemon");
stack.push("4.cloud");
while (stack.size != 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);
while (stack2.size != 0) {
  console.log(stack2.pop());
}

// stack.pop();
