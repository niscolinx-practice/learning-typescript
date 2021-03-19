import fs from 'fs'

export class Reader {
    data: string[] = []

    readFile() {
        fs.readFileSync('football.csv', {
            encoding: 'utf-8',
        }).split('')
    }
}

const reader 
