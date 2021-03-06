/**
 * Metaphone-ize the wordlist
 */

const fs = require('fs')
const metaphone = require('double-metaphone')
const strip = require('./strip')

const output = fs.readFileSync('./words.txt', 'utf8')
  .split('\n')
  .reduce((output, word) => {
    output[word] = {
      v: strip(word),
      m: metaphone(word)
    }
    return output
  }, {})

fs.writeFileSync('./words.json', JSON.stringify(output))
console.log('Done precomuting metaphones for dictionary')
