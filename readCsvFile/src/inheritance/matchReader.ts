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
        
        // for(let item of this.data){
        //     console.log(item)
        // }

        const transFormedCsv = this.data.map(match => {
            let totalWins = 0
           if(match[1] === 'Everton' && match[5] === MatchResult.HomeWin){
                totalWins++
           }
           else if(match[2] === 'Everton' && match[5] === MatchResult.AwayWin) {
                totalWins++
           }

           return totalWins
        })

       // return transFormedCsv

       // console.log('the data', this.data)
    }
}
