const Vehicle = {
    name: 'camry',
    year: 2019,
    summary() {
        return `The year is ${this.year}`;
    }
};
const printSummary = (item) => {
    console.log(`The summary is ${item.summary()}`);
    console.log('the name of the car is ', item.name);
};
printSummary(Vehicle);
//# sourceMappingURL=index.js.map