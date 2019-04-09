const metaphone = require('metaphone')
const leven = require('levenshtein-edit-distance')
const words = require('./words.json')

const vowelizeWord = (word) => {
  const wordMeta = metaphone(word)
  const matches = Object.keys(words)
    .map((word) => ({ // map dictionary to distance from this word
      word,
      distance: leven(words[word], wordMeta, true)
    }))
    .sort((a, b) => a.distance - b.distance) // sort by distance
  return matches.slice(0, 10) // 10 best guesses
}


module.exports = vowelizeWord
