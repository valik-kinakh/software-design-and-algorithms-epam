interface IPriorityQueue<T> {
  insert(item: T, priority: number): void;

  pop(): T;

  size(): number;

  isEmpty(): boolean;
}

interface Node<T> {
  key: number;
  value: T;
}

export class PriorityQueue<T> implements IPriorityQueue<T> {
  heap: Node<T>[];

  constructor() {
    this.heap = [];
  }

  parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  left(index: number): number {
    return 2 * index + 1;
  }

  right(index: number): number {
    return 2 * index + 2;
  }

  hasLeft(index: number): boolean {
    return this.left(index) < this.heap.length;
  }

  hasRight(index: number): boolean {
    return this.right(index) < this.heap.length;
  }

  swap(a: number, b: number): void {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }

  insert(item: T, priority: number): void {
    this.heap.push({ key: priority, value: item });

    let i = this.heap.length - 1;
    while (i > 0) {
      const p = this.parent(i);
      if (this.heap[p].key < this.heap[i].key) break;
      const tmp = this.heap[i];
      this.heap[i] = this.heap[p];
      this.heap[p] = tmp;
      i = p;
    }
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  pop(): T {
    if (this.heap.length == 0) return null;

    this.swap(0, this.heap.length - 1);
    const item = this.heap.pop();

    let current = 0;
    while (this.hasLeft(current)) {
      let smallerChild = this.left(current);
      if (
        this.hasRight(current) &&
        this.heap[this.right(current)].key < this.heap[this.left(current)].key
      )
        smallerChild = this.right(current);

      if (this.heap[smallerChild].key > this.heap[current].key) break;

      this.swap(current, smallerChild);
      current = smallerChild;
    }

    // @ts-ignore
    return item.value();
  }

  size(): number {
    return this.heap.length;
  }
}
