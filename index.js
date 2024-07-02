const {DateTime} = require('luxon')

module.exports = function(zone) {
  return {
    year: ISOWithPrecision('yyyy'.length),
    month: ISOWithPrecision('yyyy-mm'.length),
    day: ISOWithPrecision('yyyy-mm-dd'.length),
    hour: ISOWithPrecision('yyyy-mm-ddThh'.length),
  }

  function ISOWithPrecision(N) {
    return function(timestamp) {
      const ts = timestamp / 1000
      const dt = DateTime.fromSeconds(ts).setZone(zone)
      return dt.toISO().slice(0, N)
    }
  }
}
