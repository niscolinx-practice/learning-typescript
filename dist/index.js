const Vehicle = {
    name: 'camry',
    year: 2019,
    summary() {
        return `The year is ${this.year}`;
    }
};
const printSummary = (item) => {
    console.log(`The summary is ${item.summary()}`);
};
printSummary(Vehicle);
//# sourceMappingURL=index.js.map