// const shard = process.env.SCAN_SHARD || 20
const shard = process.env.SCAN_SHARD || 2
const shardOptions = []
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
  shardOptions.push(obj)
}
module.exports = { shardOptions }
