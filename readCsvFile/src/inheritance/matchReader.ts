import { stringToDate } from './../util/stringToDate';
import { CsvFileReader } from './CsvFileReader'

export class MatchReader extends CsvFileReader {
    constructor() {
        super('football.csv')
        this.readFile()
    }

    readMatch(){
        
        for(let match of this.data){
            stringToDate(match[0])
        }
    }
}
