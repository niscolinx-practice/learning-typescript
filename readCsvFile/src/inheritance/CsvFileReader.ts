import fs from 'fs'

export abstract class CsvFileReader<T> {
    data: T[] = []

    constructor(public csvFile: string) {}

    abstract matchRow(row: string[]): T

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
