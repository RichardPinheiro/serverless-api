const AWS = require('aws-sdk')
const S3 = new AWS.S3()

const { bucket } = require('../../config/s3')

module.exports = async ({ path, type, id, filename }) => {
    const response = await S3.getObject({
        Bucket: bucket,
        Key: `${path}/${type}/${id}/${filename}`
    }).promise()

    return response
}