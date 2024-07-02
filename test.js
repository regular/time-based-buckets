const test = require('tape')
const buckets = require('.')

test('year', t=>{
  const {year} = buckets('utc')
  t.equal(year(0), '1970')
  t.end()
})

test('month', t=>{
  const {month} = buckets('utc')
  t.equal(month(0), '1970-01')
  t.end()
})

test('day', t=>{
  const {day} = buckets('utc')
  t.equal(day(0), '1970-01-01')
  t.end()
})

test('hour', t=>{
  const {hour} = buckets('utc')
  t.equal(hour(0), '1970-01-01T00')
  t.end()
})

test('hour, different timezone', t=>{
  const {hour} = buckets('Europe/Berlin')
  t.equal(hour(0), '1970-01-01T01')
  t.end()
})
