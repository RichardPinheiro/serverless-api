const jwt = require('jsonwebtoken')

const { secret, expiresIn } = require('../../config/auth')

module.exports = async ({ email, password }) => {
    return jwt.sign({ email, password }, secret, { 
        expiresIn 
    })
}