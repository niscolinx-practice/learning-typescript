import fs from 'fs'

export class Reader {
    data: string[] = []

    readFile() {
       return fs.readFileSync('football.csv', {
            encoding: 'utf-8',
        }).split('/n')
        .map((item) => {
            
        })
    }
}

const reader = new Reader()
console.log('the read file', reader.readFile())
