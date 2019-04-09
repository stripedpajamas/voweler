#!/usr/bin/env node
const voweler = require('.')
console.log(voweler(process.argv.slice(2).join(' ')))
