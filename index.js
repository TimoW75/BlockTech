import {matchSorter} from 'match-sorter'


const list = ['hi', 'hey', 'hello', 'sup', 'yo']
const result = matchSorter(list, 'h') 
// matchSorter(list, 'y') // ['yo', 'hey']
// matchSorter(list, 'z') // []


console.log(result)