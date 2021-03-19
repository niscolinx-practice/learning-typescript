import { CsvFileReader } from './CsvFileReader';


export class MatchReader extends CsvFileReader {

    constructor(){
        super('football.csv')
        
        this.readFile()
        console.log(this.data)
    }

    
}