# :cyclone: Media Service

## A serverless application for sending media


### 💻 Technologies

This project was developed with the following technologies:

- [Serverless Stack](https://serverless.com/)
- [NodeJS](https://nodejs.org/en/)
- [AWS Lambda](https://aws.amazon.com/lambda/?nc1=h_ls)
- [AWS API Gateway](https://aws.amazon.com/api-gateway/?nc1=h_ls)
- [AWS S3](https://aws.amazon.com/s3/)


### :pencil: Project Functional resources
* Upload media to S3
* Get media from S3

## :rocket: Quick Start

#### First step 

* [Install yarn](https://classic.yarnpkg.com/en/docs/install)

### :key: Set-up your Provider Credentials in AWS

* Create an account in [AWS](https://aws.amazon.com/)

```
1: Log in your account

2: Click in 'Services' search by 'IAM'

3: In 'Access management' click in 'Users'
	3.1: Click in 'Add user'
    3.2: Select the Access type 'Programmatic access'
    3.3: Click in 'Next: Permissions' button

4: Click in 'Attach existing policies directly'
    4.1: Select 'AdministratorAccess'
    4:2: Click in 'Next Tags' button

5: In Add tags (optional) Click in 'Next: Review' button

6: In 'Review' Click in 'Create User' button

7: Copy 'Access key ID' and 'Secret access key' keep it with you

8: Click in 'close' button
```

### :wrench: Set-up your User in Serverless

* **run:** `$ yarn add serverless -g`

* **run:** `serverless config credentials --provider aws --key {Access key ID} --secret {Secret access key}`


### 💻 Run Project

* **run:** `$ yarn` for install dependencies

* **and run:** `$ yarn run dev` to serverless offline


### 💻 Deployment

* **run:** `$ yarn run deploy` for deploy in AWS


### 💻 Rollback Deployment

* **run:** `$ yarn run rm` for serverless remove


### :outbox_tray: Requets to lambda service

* To `upload file` make a `POST` request to `{APP_URL}/{APP_STAGE}/upload` with body:

```
    {
        "data": "{base64}",
        "base_path": "{base_path}",
        "channel_type": "{channel_type}",
        "channel_id": "{channel_id}",
        "filename": "{filename}",
        "mime_type": "{mime_type}"
    }
```

* The response from `upload` is:

```
    {
        "url": "{APP_URL}/{APP_STAGE}/file/{base_path}/{channel_type}/{channel_id}/{hash file}
    }
```

* To `get file` make a `GET` request to `{APP_URL}/{APP_STAGE}/file/{base_path}/{channel_type}/{channel_id}/{hash file}`

```
Prod example: https://v314414blh.execute-api.us-east-1.amazonaws.com/prod/file/wa_attachment/waweb/4/c373d84a5d5261bf51599124da87eb37.jpg

Dev example: http://localhost:3000/dev/file/wa_attachment/waweb/4/c373d84a5d5261bf51599124da87eb37.jpg
```
 
* The response is a `rendered file`
 

### :loudspeaker: How to contribute

- Clone this repository;
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'my new feature'`
- Push to your branch: `git push origin my-feature`
- Open a pull request