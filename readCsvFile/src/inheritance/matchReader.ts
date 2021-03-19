import { stringToDate } from './../util/stringToDate';
import { CsvFileReader } from './CsvFileReader'

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'W',
    Draw = 'D'
}

export class MatchReader extends CsvFileReader {
    constructor() {
        super('football.csv')
        this.readFile()
    }

    readMatch(){
        
        for(let match of this.data){
            console.log('match', match)
        }

       // console.log('the data', this.data)
    }
}
