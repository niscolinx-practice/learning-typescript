import fs from 'fs'
import { stringToDate } from '../util/stringToDate'

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D',
}

type MatchTuple = [Date, string, string, number, number, MatchResult, string]
export abstract class CsvFileReader {
    data: MatchTuple[] = []

    constructor(public csvFile: string) {}

    abstract matchRow(row: string[]): MatchTuple {}
    
    readFile(): void {
        this.data = fs
            .readFileSync(this.csvFile, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((item: string): string[] => {
                return item.split(',')
            })
            .map(this.matchRow)
    }

}
