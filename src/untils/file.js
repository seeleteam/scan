var Q = require('q')
function readSingleFile (f) {
  // Retrieve the first (and only!) File from the FileList object
  return Q.promise((resolve, reject) => {
    if (f) {
      var r = new FileReader()
      r.onload = function (e) {
        var contents = e.target.result
        resolve(contents)
      }
      r.readAsText(f)
    } else {
      alert('Failed to load file')
      reject('Failed to load file')
    }
  })
}

function asyncLoadJs (url) {
  return Q.Promise((resolve, reject) => {
    let srcArr = document.getElementsByTagName('script')
    let hasLoaded = false
    for (let i = 0; i < srcArr.length; i++) { // check if current js has already been loaded
      hasLoaded = (srcArr[i].src === url)
    }
    if (hasLoaded) {
      resolve()
      return
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.body.appendChild(script)
    script.onload = () => {
      resolve()
    }
    script.onerror = () => {
      reject()
    }
  })
}
module.exports = {readSingleFile, asyncLoadJs}
