import Point from "./point";

abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];
    protected distancesBetweenPoints: number[];

    // // parameterized constructor
    protected constructor(points: Point[]);
    protected constructor(points: Point[], color: string, filled: boolean);
    protected constructor(points: Point[], color?: string, filled?: boolean) {
        this.points = points;
        this.color = color || "green";
        this.filled = filled || true;
    }

    getType(): string {
        return this.points.length < 3 ? "line": "shape";
    }

    protected pointsArrayToString(): string {
        return this.points.map(point => point.toString()).join(', ')
    }

    toString(): string {
        const pointsString = this.pointsArrayToString();
        return `A Shape with color of ${this.color} and ${this.filled}. Points: ${pointsString}.`
    }

    getPerimeter(): number{
        const distancesBetweenPoints:number[] = [];
        const points = this.points;

        for (let i = 0; i < points.length; i++) {
            let distance:number;
            if (i === points.length - 1){
                distance = points[i].distance(points[0]);
            }else {
                distance = points[i].distance(points[i+1]);
            }
            distancesBetweenPoints.push(distance);
        }
        this.distancesBetweenPoints = distancesBetweenPoints;
        return  distancesBetweenPoints.reduce((previousValue, currentValue)=>currentValue+previousValue,0)
    }
}

export default Shape;
