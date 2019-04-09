const voweler = require('.')

console.log(voweler('dcdr')) // want 'decoder'
/*
[ { word: 'decoder', distance: 0 },
  { word: 'dicktier', distance: 0 },
  { word: 'dictier', distance: 0 },
  { word: 'doctor', distance: 0 },
  { word: 'doggeder', distance: 0 },
  { word: 'defeater', distance: 1 },
  { word: 'acuter', distance: 1 },
  { word: 'adductor', distance: 1 },
  { word: 'yakitori', distance: 1 },
  { word: 'woodcutter', distance: 1 } ]
*/
