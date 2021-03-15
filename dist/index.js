class Vehicle {
    constructor(color) {
        this.color = color;
    }
    drive() {
        console.log('driving Vehicle wih', this.color, 'color');
    }
    move() {
        console.log('moving');
    }
}
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
        {
            console.log('wheels', this.wheels);
        }
    }
    showDrive() {
        this.drive();
    }
}
const car = new Car(4, 'red');
car.showDrive();
car.move();
//# sourceMappingURL=index.js.map