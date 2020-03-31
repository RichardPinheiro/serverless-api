<h1 align="center">
    :zap: Serverless API
</h1>

<h4 align="center">
    A serverless application to media with AWS stack
</h4>

<p align="center">
    <a href="#tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#quick-start">Quick Start</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#deployment">Deployment</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#how-to-contribute">How to contribute</a>
</p>

<br>

### 💻 Technologies

This project was developed with the following technologies:

- [AWS Lambda](https://aws.amazon.com/lambda/?nc1=h_ls)
- [AWS API Gateway](https://aws.amazon.com/api-gateway/?nc1=h_ls)
- [AWS S3](https://aws.amazon.com/s3/)
- [Serverless Stack](https://serverless.com/)
- [NodeJS](https://nodejs.org/en/)


### :pencil: Project Functional resources
* Upload media to S3
* Get media from S3

## :rocket: Quick Start

#### First step 

* [Install yarn](https://classic.yarnpkg.com/en/docs/install)

* **run:** `$ yarn` for install dependencies

### :key: Set-up your Provider Credentials in AWS

* If you already have an account, you can use your **{Access key ID}** and **{Secret access key}**

* Create an account in [AWS](https://aws.amazon.com/)
```
1: Log in your account

2: Click in `Services` search by `IAM`

3: In `Access management` click in `Users`
    3.1: Click in `Add user`
    3.2: Select the Access type `Programmatic access`
    3.3: Click in `Next: Permissions` button

4: Click in `Attach existing policies directly`
    4.1: Select `AdministratorAccess`
    4:2: Click in `Next Tags` button

5: In Add tags (optional) Click in `Next: Review` button

6: In `Review` Click in `Create User` button

7: Copy `Access key ID` and `Secret access key` keep it with you

8: Click in `close` button
```

### :wrench: Set-up your User Credentials in Serverless

* **run:** `$ yarn add serverless -g`

* **run:** `serverless config credentials --provider aws --key {Access key ID} --secret {Secret access key}`


### 💻 Run Project

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
        "path": "{path}",
        "type": "{type}",
        "id": "{id}",
        "filename": "{filename}",
        "mime_type": "{mime_type}"
    }
```

* The response from `upload` is:

```
    {
        "url": "{APP_URL}/{APP_STAGE}/file/{path}/{type}/{id}/{hash file}
    }
```

* To `get file` make a `GET` request to `{APP_URL}/{APP_STAGE}/file/{path}/{type}/{id}/{hash file}`
 
* The response from `GET` is a `rendered file`
 

### :loudspeaker: How to contribute

- Fork this repository
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'my new feature'`
- Push to your branch: `git push origin my-feature`
- Open a pull request

After the merge of your pull request is done, you can delete your branch.


## Authors

* **Richard Pinheiro** - [GitHub](https://github.com/RichardPinheiro)