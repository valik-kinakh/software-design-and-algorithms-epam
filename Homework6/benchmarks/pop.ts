import { PriorityQueue } from "../src/PriorityQueue";
import { priorityRandomizer } from "../index";

const p = new PriorityQueue();

export const benchmark = (number: number) => {
  for (let i = 0; i < number; i++) {
    const priority = priorityRandomizer();
    p.insert(() => console.log(`item priority ${priority}`), priority);
  }
  console.time(`${number} elements`);
  for (let i = 0; i < number; i++) {
    p.pop();
  }
  console.timeEnd(`${number} elements`);
};
