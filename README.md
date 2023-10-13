[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# CutStr

> Write a project description

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

To install and set up the library, run:

```sh
$ npm install cutstr
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev custr
```

## Usage

This package is can be used in situations where the index of the substring is not known, but the structure of the string is.

```js
const cutStr = require('Cutstr')

string = "2016-12-21 00:00:00.000"

const day = cutStr(string, "-", " ", 2, 1);

console.log(day) //  21 
```

## Authors

* **Feuvpi - *Initial work* - [FredVasquez](https://github.com/feuvpi)

## License

[MIT License](https://github.com/feuvpi/cutstr/blob/main/LICENSE.MD) © Fred Vasquez