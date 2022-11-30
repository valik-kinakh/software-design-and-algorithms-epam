interface IPriorityQueue<T> {
  insert(item: T, priority: number): void;
  peek(): T;
  pop(): T;
  size(): number;
  isEmpty(): boolean;
}

export class PriorityQueue<T> implements IPriorityQueue<T> {
  private readonly data: [number, T][];

  constructor() {
    this.data = [];
  }

  insert(item: T, priority: number): void {
    this.data.push([priority, item]);
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  peek(): T {
    return this.isEmpty()
      ? null
      : this.data.reduce((min, current) =>
          current[0] < min[0] ? current : min
        )[1];
  }

  pop(): T {
    if (this.isEmpty()) return null;

    let min = this.data[0];
    let minIndex = -1;
    this.data.forEach((item, index) => {
      if (item[0] < min[0]) {
        min = item;
        minIndex = index;
      }
    });

    this.data.splice(minIndex, 1);
    return min[1];
  }

  size(): number {
    return this.data.length;
  }
}
