
// // const Vehicle = {
// //     name: 'camry',
// //     year: 2019,
// //     summary(): string {
// //         return `The year is ${this.year}`
// //     }
// // }


// // interface Report {
// //     summary(): string,
// //     name: string
// // }


// // const printSummary = (item: Report) => {
// //     console.log(`The summary is ${item.summary()}`)
// //     console.log('the name of the car is ', item.name)
// // }

// // printSummary(Vehicle)


// class Vehicle {

//     constructor(protected color: string){}
//     protected drive(){
//         console.log('driving Vehicle wih', this.color, 'color')
//     }

//     move(){
//         console.log('moving')
//     }
// }

// class Car extends Vehicle{
//     // drive(){
//     //     console.log('driving car')
//     // }
//     constructor(public wheels: number, color:string){
//         super(color);
//         {
//             console.log('wheels', this.wheels)
//         }
//     }

//     showDrive(): void{
//         this.drive()
//     }
// }

// const car = new Car(4, 'red')
// car.showDrive()
// car.move()