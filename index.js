const metaphone = require('double-metaphone')
const leven = require('levenshtein-edit-distance')
const words = require('./words.json')
const strip = require('./strip')

const vowelizeWord = (word) => {
  let wordMeta = metaphone(word)
  if (wordMeta.some(m => !m)) {
    wordMeta = metaphone(word + 'a')
  }
  const strippedWord = strip(word)
  const matches = Object.keys(words)
    .filter((dword) => words[dword].v === strippedWord)
    .map((dword) => ({ // map dictionary to distance from this word
        word: dword,
        distance: words[dword].m // take mean of distance to primary and secondary
          .map((meta, i) => leven(meta, wordMeta[i], true))
          .reduce((sum, distance) => sum + distance, 0) / 2
      }))
  if (!matches.length) return '?'
  let candidates = []
  let lowestScore = 0
  while (!candidates.length) {
    // find subset of matches with lowest score
    candidates = matches.filter((match) => match.distance <= lowestScore)
    lowestScore++
  }
  // since the wordlist is sorted by usage, the top should be a winner
  return (candidates[0] || {}).word || '?' // best guess
}

const vowelizeSentence = (sentence) => {
  return sentence
    .replace(/[^A-Za-z\s]/g, '') // take out the trash
    .split(' ') // break up
    .map(vowelizeWord) // find the missing pieces
    .join(' ') // lick and stick
}

module.exports = vowelizeSentence
