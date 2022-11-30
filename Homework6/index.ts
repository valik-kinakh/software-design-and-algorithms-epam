import { PriorityQueue } from "./src/PriorityQueue";

const priorityRandomizer = (): number => {
  return Number((Math.random() * 10000).toFixed(0));
};

const fillPriorityQueue = (
  numberOfJobs: number,
  queue: PriorityQueue<any>
): void => {
  for (let i = 0; i < 1000; i++) {
    const priority = priorityRandomizer();
    queue.insert(() => console.log(`item priority ${priority}`), priority);
  }
};

const queue = new PriorityQueue();

fillPriorityQueue(20000, queue);

queue.execute();
