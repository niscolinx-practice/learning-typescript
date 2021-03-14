const Vehicle = {
    name: 'camry',
    year: 2019,
    summary() {
        return `The year is ${this.year}`;
    }
};
const printSummary = (item) => {
    console.log(`The year of the car is  ${item.summary}`);
};
//# sourceMappingURL=index.js.map