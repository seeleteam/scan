# Seele Scan

This is a block explore of seele.

## Prerequisite
### development mode
* node
* npm
### production mode
* node
* npm
* nginx

## Installation
### dev mode
make sure you have node.js and npm installed
``` bash
# clone scan repository
git clone https://github.com/seeleteam/scan
cd scan
# install the dependencies
npm install
# start scan vue front
npm start
```
### production mode
make sure you have node.js,npm,nginx installed
``` bash
# clone scan repository
git clone https://github.com/seeleteam/scan
cd scan
# install the dependencies
npm install
# build production output
npm run build
# deploy scan vue front
cp -r dist /usr/local/nginx/seele-scan
# config nginx server
...
# reload nginx
nginx -s reload
```

## Config Item Description
### config/dev.env.js
``` bash
NODE_ENV: '"development"',  // dev mode
NEW_WORK_ID: 2,  // net work type, ex: 1 main 2 test
SCAN_API_URL: '"http://localhost:3003"', // scan-api url
SCAN_API_PATH: '"/api/v1"' // scan-api path
```
### config/prod.env.js
``` bash
NODE_ENV: '"production"', // prod mode
NEW_WORK_ID: 2, // net work type, ex: 1 main 2 test
SCAN_API_URL: '"http://localhost:3003"', // scan-api url
SCAN_API_PATH: '"/api/v1"' // scan-api path
```

## View
see seele scan at http://localhost:3002(default)

## Commands
### npm commands
``` bash
# install dependencies
npm install
# serve with hot reload at localhost:3002
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
# run unit tests
npm run unit
# run e2e tests
npm run e2e
# run all tests
npm test
```
