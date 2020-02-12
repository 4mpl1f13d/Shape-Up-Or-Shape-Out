//Shapes
//Rectangle: Inputs for width and height
//Square: Input for side length
//Circle: Input for radius
//Isoceles Right Triangle: Input for height
let rectangle = document.getElementById('.rectangle');
let square = document.getElementById('sqSide');
let circle = document.getElementById('.circleRad');
let rtriangle = document.getElementById('.rtriangle');


//Sidebar Inputs
let shapeSB = document.getElementById('Shape');
let heightSB = document.getElementById('Height');
let widthSB = document.getElementById('Width');
let areaSB = document.getElementById('Area');
let perimeterSB = document.getElementById('Perimeter');
let radiusSB = document.getElementById('Radius');

//Button
let rectB = document.getElementById('rectBtn');
let sqB = document.getElementById('sqBtn');
let cirB = document.getElementById('cirBtn');
let triB = document.getElementById('triBtn');

//Document Container
let container = document.getElementByClassName('.container');

sqB.addEventListener('click', () => new Square(document.getElementById('squareSideLength').value));
rectB.addEventListener('click', () => new Rectangle(document.getElementById('rectangleWidth').value, document.getElementById('rectangleHeight').value));
cirB.addEventListener('click', () => new Circle(document.getElementById('circleRadius').value));
triB.addEventListener('click', () => new Triangle(document.getElementById('triangleHeight').value));

class Shape {
    constructor() {
        this.shape = document.createElement('div');
        this.shape.addEventListener('click', () => this.describe());
        this.shape.addEventListener('dblclick', () => container.removeChild(this.shape));
        container.appendChild(this.shape);
    }
    addShapeToDOM() {
        container.appendChild(this.shape);
    }
    describe() {
        shapeName.innerText = `Shape Name: ${this.shape.name}`;
        shapeWidth.innerText = `Width: ${this.shape.width}`;
        shapeHeight.innerText = `Height: ${this.shape.height}`;
        shapeRadius.innerText = `Radius: ${this.shape.radius}`;
        shapeArea.innerText = `Area: ${this.shape.area}`;
        shapePerimeter.innerText = `Perimeter: ${this.shape.perimeter}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.shape.name = 'Rectangle';
        this.shape.classList.add('rectangle');
        this.shape.style.height = `${this.height}px`;
        this.shape.style.width = `${this.width}px`;
        this.shape.style.top = `${Math.floor(Math.random() * 600)}px`;
        this.shape.style.left = `${Math.floor(Math.random() * 600)}px`;
        this.doMath();
    }
    doMath() {
        this.shape.height = this.height;
        this.shape.width = this.width;
        this.shape.radius = 'N/A';
        this.shape.area = this.width * this.height;
        this.shape.perimeter = (parseInt(this.width) + parseInt(this.height) * 2);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.shape.name = 'Circle';
        this.shape.classList.add('circle');
        this.shape.style.height = `${document.getElementById('circleRadius').value}px`;
        this.shape.style.width = `${document.getElementById('circleRadius').value}px`;
        this.shape.style.top = `${Math.floor(Math.random() * 275)}px`;
        this.shape.style.left = `${Math.floor(Math.random() * 275)}px`;
        this.doMath();
    }
    doMath() {
        this.shape.height = this.radius * 2;
        this.shape.width = this.radius * 2;
        this.shape.radius = this.radius;
        this.shape.area = (Math.PI * this.radius ** 2);
        this.shape.area = this.shape.area.toFixed(2);
        this.shape.perimeter = (2 * Math.PI * this.radius);
        this.shape.perimeter = this.shape.perimeter.toFixed(2);
    }
}

class Triangle extends Shape {
    constructor(height) {
        super();
        this.height = height;
        this.shape.name = 'Triangle';
        this.shape.classList.add('triangle');
        this.shape.style.borderTopWidth = `${document.getElementById('triangleHeight').value}px`;
        this.shape.style.borderRightWidth = `${document.getElementById('triangleHeight').value}px`;
        this.shape.style.top = `${Math.floor(Math.random() * 275)}px`;
        this.shape.style.left = `${Math.floor(Math.random() * 275)}px`;
        this.doMath();
    }
    doMath() {
        this.shape.radius = 'N/A';
        this.shape.height = this.height;
        this.shape.width = this.height;
        this.shape.area = 0.5 * this.height * this.height;
        this.shape.perimeter = 2 * this.height + Math.sqrt(2) * this.height;
        this.shape.perimeter = this.shape.perimeter.toFixed(2);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
        this.shape.name = 'Square';
        this.shape.classList.add('square');
        this.shape.style.height = `${this.sideLength}px`;
        this.shape.style.width = `${this.sideLength}px`;
        this.shape.style.top = `${Math.floor(Math.random() * 400)}px`;
        this.shape.style.left = `${Math.floor(Math.random() * 400)}px`;
        this.doMath();
    }
    doMath() {
        this.shape.width = this.sideLength;
        this.shape.height = this.sideLength;
        this.shape.area = this.sideLength ** 2;
        this.shape.perimeter = this.sideLength * 4;
        this.shape.radius = 'N/A';
    }
}





