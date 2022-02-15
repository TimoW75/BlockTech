
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import {matchSorter} from 'match-sorter'


const list = ['hi', 'hey', 'hello', 'sup', 'yo']
const result = matchSorter(list, 'h') 
// matchSorter(list, 'y') // ['yo', 'hey']
// matchSorter(list, 'z') // []


console.log(result)