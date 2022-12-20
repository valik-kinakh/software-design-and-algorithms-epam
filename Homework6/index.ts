import { benchmark } from "./benchmarks/pop";

export const priorityRandomizer = (): number => {
  return Number((Math.random() * 10000).toFixed(0));
};

// benchmark
benchmark(100000);
