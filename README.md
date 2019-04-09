# voweler

goal: insert vowels in text that has no vowels (unless word starts with vowel)

idea:
  - precompute double metaphones for dictionary words
  - precompute voweless versions of dictionary words
  - at runtime, compute double metaphone for input word
  - if double metaphone is null (e.g. `metaphone('w')`), get metaphone for word + 'a'
  - filter dictionary by words whose voweless, sorted representation match input word (sorted)
  - compute a score defined as the mean levenshtein distance between primary and secondary metaphones for each dictionary word against input word
    - that is, for each dictionary word's metaphones `[dp, ds]`, and the input word's metaphones `[ip, is]`, compute `(leven(dp, ip) + leven(ds, is)) / 2`
  - filter the wordlist by smallest possible score and grab the top

using [a wordlist](https://github.com/first20hours/google-10000-english) that is sorted by usage and is relatively small (20k words) shows best results.

status: isn't horrible

## use
```bash
$ npx voweler hppy brthdy
happy birthday
```

or import to your project (why?)
```javascript
const voweler = require('voweler')

const vowelized = voweler('a sntnc wtht vwls')
// a contains without wolves
// -_- -_- -_- -_- -_- -_-
```

## License
MIT