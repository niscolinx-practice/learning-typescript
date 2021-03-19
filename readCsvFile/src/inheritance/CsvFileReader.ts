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

    readFile(): void {
        this.data = fs
            .readFileSync(this.csvFile, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((item: string): string[] => {
                return item.split(',')
            })
            .map((row: string[]):MatchTuple {
        return [
            stringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6],
        ]
    })
    }

    matchRow(row: string[]):MatchTuple {
        return [
            stringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6],
        ]
    }
}
