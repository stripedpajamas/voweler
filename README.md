# voweler

goal: insert vowels in text that has no vowels (unless word starts with vowel)

idea: metaphone word, then find smallest levenshtein distance to metaphones of dictionary

status: doesn't work great

## use
```bash
$ npx voweler hppy brthdy
happy birthday
```

or import to your project (why?)
```javascript
const voweler = require('voweler')

const vowelized = voweler('a sntnc wtht vwls')
```

## License
MIT