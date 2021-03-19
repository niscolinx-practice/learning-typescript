import { MatchReader } from './inheritance/matchReader';

const matchReader = new MatchReader('football.csv')

matchReader.readFile()
console.log(matchReader.data)