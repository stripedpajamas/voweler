const strip = (word) => (word[0] + word
  .slice(1)
  .replace(/[aeiou]/g, ''))

module.exports = strip
