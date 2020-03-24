const crypto = require('crypto')
const { extname } = require('path')

module.exports = (fileOriginalname) => {
    const buffer = crypto.randomBytes(16)

    const filename = buffer.toString('hex') + extname(fileOriginalname)

    return filename
}
