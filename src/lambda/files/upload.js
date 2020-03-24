const AWS = require('aws-sdk')
const S3 = new AWS.S3()

const fileHashGenerator = require('../utils/fileHashGenerator')

const { bucket } = require('../../config/s3')
const { appUrl, stage } = require('../../config/app')

module.exports = async ({ data, filename, mime_type, base_path, channel_type, channel_id }) => {
    const fileBuffer = Buffer.from(data, 'base64')
    const hashName = fileHashGenerator(filename)
    const path = `${base_path}/${channel_type}/${channel_id}/${hashName}`

    await S3.upload({
        Bucket: bucket,
        ContentType: mime_type,
        Body: fileBuffer,
        Key: path
    }).promise()

    const url = `${appUrl}/${stage}/file/${path}`

    return url
}