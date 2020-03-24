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


### 💻 To run this project

* [Install yarn](https://classic.yarnpkg.com/en/docs/install)

* **run:** `$ yarn` for install dependencies

* **and run:** `$ yarn run dev` to serverless offline


### 💻 Deployment

* **run:** `$ yarn run deploy` for deploy in AWS


### 💻 Rollback Deployment

* **run:** `$ yarn run rm` for serverless remove


### 💻 Requets to lambda service

* To `upload file` make a `POST` request to `{APP_URL}/{APP_STAGE}/upload` with body:

 ```
	{
       "data":"base64",
       "base_path": "{base_path}",
       "channel_type": "{channel_type}",
       "channel_id": "{channel_id}",
       "filename": "{filename}",
       "mime_type": "{mime_type}"
    }
```

* The response from `upload` is:
```
```
   {
       "url": "{APP_URL}/{APP_STAGE}/file/{base_path}/{channel_type}/{channel_id}/{hash file}
   }
```
```
 
 * To `get file` make a `GET` request to `{APP_URL}/{APP_STAGE}/file/{base_path}/{channel_type}/{channel_id}/{hash file}`
 
 * The response is a `rendered image`
 

### How to contribute

- Clone this repository;
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'my new feature'`
- Push to your branch: `git push origin my-feature`
- Open a pull request



# Api Tv News

* Api Tv news provides birthdays for all partners, internal company news and more

### Prerequisites

* The following items are necessary to run this application.

```
node
npm
mongodb

```

### Installing

* Clone this repository. Run the following steps/commands:

```
1) Run: npm install
2) In folder config rename the file default.json to development.json
```

* In folder config Create or set database and enter the details in your development.json like:

```
  "database": {
    "mongodb": "mongodb://localhost:27017/nwnews",
  }
```

## Deployment

* Now you can run the following command to run the application.
```
1) Run: nodemon app.js or node app.js

```

## API
* An example on how to use the application API. In this example I will be using [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download/) to test the API.
```
1) Select 'POST' request

2) Enter the URL: http://localhost:8080/api/person/save

3) Click on 'Headers' and add one param:
	3.1) Key: 'Accept'; Value: 'application/json'

4) Click on 'Body', select 'raw':
```
```
	{
        "nickname" : "nickname",
        "name" : "name",
        "birthday" : {
            "day" : number of day,
            "month" : {
                "number" : number of month,
                "name" : name of month
            }
        },
        "phone" : phone number,
        "squad" : squad,
        "picture" : "picture.jpg",
        "backgrounPicture" : "backgrounPicture.jpg",
        "qrcode" : "qrcode"
    }
```
```
5) Click the 'Send' button

6) Open a new request window and select the 'GET' request and enter the URL: http://localhost:8080/api/birthday/day for example.

7) Click the 'Send' button and you should see the birthday of day

8) Open a new request window and select the 'GET' request and enter the URL: http://localhost:8080/api/birthday/others for example.

9) Click the 'Send' button and you should see others birthdays in the month.

10) Select 'POST' request

11) Enter the URL: http://localhost:8080/api/news/save

12) Click on 'Headers' and add one param:
	12.1) Key: 'Accept'; Value: 'application/json'

13) Click on 'Body', select 'raw':
```
```
    {
        "title": "title",
        "description": "description",
        "published": {
            "day": number of day,
            "month": {
                "number": number of month,
                "name": "name od month"
            }
        },
        "qrcode": "qrcode"
    }
```
```
14) Click the 'Send' button.

15) Open a new request window and select the 'GET' request and enter the URL: http://localhost:8080/api/news for example.

16) Click the 'Send' button and you should see the news of company.
```

## Built With

* [Express](https://expressjs.com/pt-br/) - The Node framework used

## Authors

* **Richard Pinheiro** - [GitHub](https://github.com/RichardPinheiro)
