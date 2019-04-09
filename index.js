const metaphone = require('metaphone')
const leven = require('levenshtein-edit-distance')
const words = require('./words.json')

const vowelizeWord = (word) => {
  const wordMeta = metaphone(word)
  const matches = Object.keys(words)
  .filter((dictionaryWord) => dictionaryWord.startsWith(word[0]))
  .map((word) => ({ // map dictionary to distance from this word
      word,
      distance: leven(words[word], wordMeta, true)
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
