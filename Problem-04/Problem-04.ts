// Problem-04


type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(uniqueShape: Shape): number {
    // circle type guard
    if (uniqueShape.shape === "circle") {
        // Math.PI * radius * radius;
        return Math.PI * uniqueShape.radius * uniqueShape.radius;
    } 
    // circle type guard
    else if (uniqueShape.shape === "rectangle") {       
        // width * height 
        return uniqueShape.width * uniqueShape.height;
    } else {
        throw new Error('The type is not valid shape');
    }
}

// circle input
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); 

// rectangle input
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea); 
