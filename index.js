import {matchSorter} from 'match-sorter'
// or const {matchSorter} = require('match-sorter')
// or window.matchSorter.matchSorter
const list = ['hi', 'hey', 'hello', 'sup', 'yo']
matchSorter(list, 'h') // ['hello', 'hey', 'hi']
matchSorter(list, 'y') // ['yo', 'hey']
matchSorter(list, 'z') // []


console.log(matchSorter)