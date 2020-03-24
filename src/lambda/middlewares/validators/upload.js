const Yup = require('yup')
const decode = require('atob')

const { upload } = require('../../files/handler')

module.exports = {
    async validate(req) {
        try {
            const body = JSON.parse(decode(req.body))

            const schema = Yup.object().shape({
                data: Yup.string().required(),
                base_path: Yup.string().required(),
                channel_type:  Yup.string().required(),
                channel_id:  Yup.string().required(),
                filename:  Yup.string().required(),
                mime_type:  Yup.string().required()
            })

            await schema.validate(body, { abortEarly: false })
    
            return await upload(body)
        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ 
                    error: 'Validation fails.',
                    messages: error.inner.map(error => error.message)
                })
            }
        }
    }
}
