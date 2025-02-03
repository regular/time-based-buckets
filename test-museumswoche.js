const {DateTime, Settings} = require('luxon')
const ws = {
  firstDay: 3, // Wednesday 
  minimalDays: 4, // ?
  weekend: [2] // Tuesday is the 'Weekend'
}
Settings.defaultWeekSettings = ws

print(DateTime.fromISO('2024-01-01'))
let d = DateTime.fromObject({
  localWeekYear: 2024,
  localWeekNumber: 1
})
print(d)
d = d.endOf('week', {useLocaleWeeks: true})
print(d)
d = d.plus({milliseconds: 1})
print(d)

function print(d) {
  console.log(d.toISO(), d.weekdayShort, d.localWeekYear, 'MW'+d.localWeekNumber + ', Tag', d.localWeekday, 'ISO:', d.toISOWeekDate())
}
