const strip = (word) => (word[0] + word
  .slice(1)
  .replace(/[aeiou]/g, ''))
  .split('')
  .sort()
  .join('')

module.exports = strip
