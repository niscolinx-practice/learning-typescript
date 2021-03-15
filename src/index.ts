
// const Vehicle = {
//     name: 'camry',
//     year: 2019,
//     summary(): string {
//         return `The year is ${this.year}`
//     }
// }


// interface Report {
//     summary(): string,
//     name: string
// }


// const printSummary = (item: Report) => {
//     console.log(`The summary is ${item.summary()}`)
//     console.log('the name of the car is ', item.name)
// }

// printSummary(Vehicle)


class Vehicle {
    drive(){
        console.log('driving!!')
    }

    move(){
        console.log('moving')
    }
}

class Car extends Vehicle{
    drive(){
        console.log('driving car')
    }
}

const car = new Car()
car.drive()
car.move()