import { stringToDate } from './../util/stringToDate';
import { CsvFileReader } from './CsvFileReader'

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

let matchTuple : [Date, string, string, number, number, MatchResult, string]
export class MatchReader extends CsvFileReader {
    constructor() {
        super('football.csv')
        this.readFile()
    }

    readMatch(){

        let totalWins = 0
        this.data.map(match => {
           if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
                totalWins++
           }
           else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
                totalWins++
           }

        })
        return totalWins

    }

    load(){
       const loader = this.data.map(row => {
            return [
                stringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ]
        })

        return loader
    }
}
