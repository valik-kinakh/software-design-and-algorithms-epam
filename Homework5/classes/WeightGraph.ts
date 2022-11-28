import { Vertex } from "./Vertex";

export interface IWeightedGraph<T> {
  addVertex(key: string): void;
  addEdge(vertex1: T, vertex2: T, weight: number): void;
}

export class WeightGraph implements IWeightedGraph<Vertex> {
  adjacenyList;
  constructor() {
    this.adjacenyList = {};
  }

  addVertex(vertex: string): void {
    if (!this.adjacenyList[vertex]) {
      this.adjacenyList[vertex] = [];
    }
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight) {
    const name1 = vertex1.name;
    const name2 = vertex2.name;

    this.adjacenyList[name1].push({ node: name2, weight });
    this.adjacenyList[name2].push({ node: name1, weight });
  }
}
