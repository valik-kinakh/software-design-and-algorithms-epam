import Point from "./point";

abstract class Shape {
    // fields of Shape class
    protected color: string;
    protected filled: boolean;
    protected points: Point[];
    protected distancesBetweenPoints: number[];

    // // parameterized constructor
    protected constructor(points: Point[]);
    protected constructor(points: Point[], color: string, filled: boolean);
    protected constructor(points: Point[], color?: string, filled?: boolean) {
        if (points.length < 3){
            throw new Error("Al least 3 point")
        }
        this.points = points;
        this.color = color || "green";
        this.filled = filled ?? true;
    }

    getType(): string {
        return "shape";
    }

    // method that converts array of Point instances to string
    protected pointsArrayToString(): string {
        return this.points.map(point => point.toString()).join(', ')
    }

    toString(): string {
        const pointsString = this.pointsArrayToString();
        return `A Shape with color of ${this.color} and ${this.filled ? "filled" : "not filled"}. Points: ${pointsString}.`
    }

    calculateDistancesBetweenPoints(){
        const distancesBetweenPoints:number[] = [];
        const points = this.points;

        for (let i = 0; i < points.length; i++) {
            const nextPoint = i === points.length - 1 ? 0 : i + 1;
            const distance = points[i].distance(points[nextPoint])
            distancesBetweenPoints.push(distance);
        }

        // array if distances ( used to calculate type of figure)
        this.distancesBetweenPoints = distancesBetweenPoints;
    }

    getPerimeter(): number{
        this.calculateDistancesBetweenPoints();
        return  this.distancesBetweenPoints.reduce((previousValue, currentValue)=>currentValue+previousValue,0)
    }
}

export default Shape;
