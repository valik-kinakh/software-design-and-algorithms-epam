import { PriorityQueue } from "../src/PriorityQueue";
import { priorityRandomizer } from "../index";

const p = new PriorityQueue();

export const TenThousand = () => {
  for (let i = 0; i < 10000; i++) {
    const priority = priorityRandomizer();
    p.insert(() => console.log(`item priority ${priority}`), priority);
  }
  console.time("10000 elements");
  for (let i = 0; i < 10000; i++) {
    p.pop();
  }
  console.timeEnd("10000 elements");
};

export const FiftyThousand = () => {
  for (let i = 0; i < 50000; i++) {
    const priority = priorityRandomizer();
    p.insert(() => console.log(`item priority ${priority}`), priority);
  }
  console.time("50000 elements");
  for (let i = 0; i < 50000; i++) {
    p.pop();
  }
  console.timeEnd("50000 elements");
};
