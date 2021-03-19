import { stringToDate } from './../util/stringToDate';
import { CsvFileReader } from './CsvFileReader'

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

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

    loadData(){
        return this.readFile()
    }

}
