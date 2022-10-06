import Shape from "./shape";
import Point from "./point";

class Triangle extends Shape {

    // // parameterized constructor
    constructor(points: [Point, Point, Point]);
    constructor(points: [Point, Point, Point], color?: string, filled?: boolean);
    constructor(points: [Point, Point, Point], color?: string, filled?: boolean) {
        super(points, color, filled);
    }

    protected pointsArrayToString(): string {
        return this.points.map((point, index) => `v${index + 1}=${point.toString()}`).join(',')
    }

    toString(): string {
        const pointsString = this.pointsArrayToString();
        return `Triangle[${pointsString}]`;
    }

    getType(): string {
        this.getPerimeter();

        let type:string;
        const uniqueValues = new Set([...this.distancesBetweenPoints]);
        if (uniqueValues.size === 3){
            type = "scalene triangle";
        }else if (uniqueValues.size === 2){
            type = "isosceles triangle";
        }else {
            type = "equilateral triangle"
        }

        return type;
    }
}

export default Triangle;
