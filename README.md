# open-school-system

[![Build Status](https://travis-ci.org/nwashangai/open-school-system.svg?branch=develop)](https://travis-ci.org/nwashangai/open-school-system) 
[![Coverage Status](https://coveralls.io/repos/github/nwashangai/open-school-system/badge.svg?branch=ch-server-setup-2190715)](https://coveralls.io/github/nwashangai/open-school-system?branch=ch-server-setup-2190715) 
[![Maintainability](https://api.codeclimate.com/v1/badges/fd7c02b8732837541f2b/maintainability)](https://codeclimate.com/github/nwashangai/open-school-system/maintainability) 
[![Test Coverage](https://api.codeclimate.com/v1/badges/fd7c02b8732837541f2b/test_coverage)](https://codeclimate.com/github/nwashangai/open-school-system/test_coverage)


With lots of challenges facing the managment of schools in Africa, we are bulding an automated open system to guide and leverage the difficulties incurred as a result

## **Getting Started**

These instructions bellow will guide you in getting a copy of the project up and running on your local machine for development and testing purposes. 

## Prerequisites

You will need to have the following softwares installed on your local machine

  - node js & npm
  - postgres
  - git *(optional)*

## Downloading

To download the project to your PC, click on the download button to download the zip file or clone with SSH as follows

  ```git clone git@github.com:nwashangai/open-school-system.git```

  and then

  ```cd open-school-system```

## Setup environment variables

Rename the 
```
.env.sample
```
to
```
.env
```
and fill in your database config information in the file without quotes, you can pass any string as value to the ```SECRET``` 

## Installing

A step by step series of instruction to install all dependencies and get a development env running

```
npm install
```
To create postgres database called *oss* run
```
createdb oss
```
To start the server run
```
npm start
```
Kudos :+1: now your API server is running at http://localhost:3000/

## Running the tests

To run mocha test
```
npm run test
```
*Note: you do not need to start your server when running test, the mocha test run automatically creates an instance of the server on port 3000 and therefore will generate an error when your test tries to create identical server*

## Credits

*Credits @nwashangai @SIP*