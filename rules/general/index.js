const comments = require('./comments')

module.exports = Object.assign(
    {
        'indentation': 4,
        'max-empty-lines': 1,
        'no-empty-source': true,
        'no-missing-end-of-source-newline': true,
    },
    comments
)
