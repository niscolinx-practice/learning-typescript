
const Vehicle = {
    name: 'camry',
    year: 2019,
    summary(): string {
        return `The year is ${this.year}`
    }
}


interface Report {
    summary(): string
}


const printSummary = (item: Report) => {
    console.log(`The year of the car is  ${item.summary}`)
}