const metaphone = require('double-metaphone')
const leven = require('levenshtein-edit-distance')
const words = require('./words.json')

const vowelizeWord = (word) => {
  const wordMeta = metaphone(word)
  const matches = Object.keys(words)
    .filter((dword) => dword.startsWith(word[0]))
    .map((dword) => ({ // map dictionary to distance from this word
        word: dword,
        distance: words[dword] // take mean of distance to primary and secondary
          .map((meta, i) => leven(meta, wordMeta[i], true))
          .reduce((sum, distance) => sum + distance, 0) / 2
      }))
      .sort((a, b) => a.distance - b.distance) // sort by distance
  return matches[0].word // best guess
}

const vowelizeSentence = (sentence) => {
  return sentence
    .replace(/[^A-Za-z\s]/g, '') // take out the trash
    .split(' ') // break up
    .map(vowelizeWord) // find the missing pieces
    .join(' ') // lick and stick
}

module.exports = vowelizeSentence
