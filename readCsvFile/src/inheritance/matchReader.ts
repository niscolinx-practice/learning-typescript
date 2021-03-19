import { stringToDate } from './../util/stringToDate';
import { CsvFileReader } from './CsvFileReader'

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'W',
    Draw = 'D'
}

let matchTuple : [Date, string, string, number, number, string, string]
export class MatchReader extends CsvFileReader {
    constructor() {
        super('football.csv')
        this.readFile()
    }

    readMatch(){
        
        const transFormedCsv = this.data.map(match => {
           return match
        })

        return transFormedCsv

       // console.log('the data', this.data)
    }
}
