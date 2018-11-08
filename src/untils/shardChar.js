// const shard = process.env.SCAN_SHARD || 20
const shard = process.env.SCAN_SHARD || 2
const shardCharOptions = [
  {
    value: '0',
    label: 'All'
  }
]
for (let i = 1; i <= shard; i++) {
  let n = i
  if (i < 10) {
    n = `0${i}`
  } else {
    n = i
  }
  let obj = {}
  obj.value = `${i}`
  obj.label = `Shard ${n}`
  shardCharOptions.push(obj)
}
module.exports = { shardCharOptions }
