# Media Service

## A serverless application for sending media


### 💻 Technologies

This project was developed with the following technologies:

- [Serverless Stack](https://serverless.com/)
- [NodeJS](https://nodejs.org/en/)
- [AWS Lambda](https://aws.amazon.com/lambda/?nc1=h_ls)
- [AWS API Gateway](https://aws.amazon.com/api-gateway/?nc1=h_ls)
- [AWS S3](https://aws.amazon.com/s3/)


### 💻 Project Functional resources
* Upload media to s3
* Get media from s3

## 💻 Set-up your Provider Credentials in AWS
```
1) Create account in AWS

2) Click in 'Services' search by 'IAM'

3) In 'Access management' click in 'Users':
	3.1) Click; in 'Add user' button
    3.2) Select the Access type 'Programmatic access'
    3.3) Click in 'Next: Permissions' button

4) Click in 'Services' search by 'IAM'
```

### 💻 Run Project

* [Install yarn](https://classic.yarnpkg.com/en/docs/install)

* **run:** `$ yarn` for install dependencies

* **and run:** `$ yarn run dev` to serverless offline


### 💻 Deployment

* **run:** `$ yarn run deploy` for deploy in AWS


### 💻 Rollback Deployment

* **run:** `$ yarn run rm` for serverless remove


### 💻 Requets to lambda service

#### To `upload file` make a `POST` request to `{APP_URL}/{APP_STAGE}/upload` with body:

```
    {
        "data": "base64",
        "base_path": "base_path",
        "channel_type": "channel_type",
        "channel_id": "channel_id",
        "filename": "filename",
        "mime_type": "mime_type"
    }
```

#### The response from `upload` is:

```
    {
        "url": "{APP_URL}/{APP_STAGE}/file/{base_path}/{channel_type}/{channel_id}/{hash file}
    }
```

#### To `get file` make a `GET` request to `{APP_URL}/{APP_STAGE}/file/{base_path}/{channel_type}/{channel_id}/{hash file}`
 
#### The response is a `rendered image`
 

### How to contribute

- Clone this repository;
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'my new feature'`
- Push to your branch: `git push origin my-feature`
- Open a pull request