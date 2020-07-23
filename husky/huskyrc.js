module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'post-merge': 'yarn or npm i',
  },
}
