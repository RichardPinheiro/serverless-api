require('dotenv/config')

const decode = require('atob')

const authTokenGeneretor = require('../utils/authTokenGeneretor')

module.exports = {
	async token(req) {
		const body = JSON.parse(decode(req.body))

		const token = await authTokenGeneretor(body)

		return {
			statusCode: 200,
			body: JSON.stringify({ token })
		}
    }
}