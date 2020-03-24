require('dotenv/config')

const getFile = require('./getFile')
const upload = require('./upload')

module.exports = {
	async upload(req) {
		const url = await upload(req)

		return {
			statusCode: 200,
			body: JSON.stringify({ url })
		}
	},

	async file(req) {
		const response = await getFile(req.pathParameters)

		return {
			statusCode: 200,
			headers: { 'Content-Type': response.ContentType },
			body: response.Body.toString('base64'),
			isBase64Encoded: true
		}
	},
}