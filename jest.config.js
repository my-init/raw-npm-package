module.exports = {
  setupFilesAfterEnv: [
    // you may not need this
    // https://stackoverflow.com/questions/46227783/encoding-not-recognized-in-jest-js
    './test/fix-wired-errors'
  ]
}
