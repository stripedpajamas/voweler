/**
 * Metaphone-ize the wordlist
 */

const fs = require('fs')
const metaphone = require('metaphone')

const output = fs.readFileSync('./words.txt', 'utf8')
  .split('\r\n') // windows bs
  .reduce((output, word) => {
    output[word] = metaphone(word)
    return output
  }, {})

fs.writeFileSync('./words.json', JSON.stringify(output))
console.log('Done precomuting metaphones for dictionary')
