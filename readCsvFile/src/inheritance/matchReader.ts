import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv')
csvFileReader.readFile()

console.log(csvFileReader.data)
export class MatchReader {

    constructor(){

    }
}