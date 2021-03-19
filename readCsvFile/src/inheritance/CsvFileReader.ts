import fs from 'fs'

export class CsvFileReader {
    data: string[][] = []

    constructor(public csvFile: string) {}

    readFile(): string[][] {
        return (this.data = fs
            .readFileSync(this.csvFile, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((item) => {
                return item.split(',')
            }))
    }
}
