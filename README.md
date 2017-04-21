# hvu-front-template
This repo is a template that can be used for other HVU applications.

### Installation ###
After downloading you can:
```npm install```
then
```
npm run dev
```
to start running in debug mode. This allows vue-devtools to be able
to connect to the app and live reload to happen. It will by default proxy
all requests to /api/* to localhost:3000 so:
   http://localhost:8080/api/trad/1.1.1 => http://localhost:3000/api/trad/1.1.1

this allows api requests made in debug mode actually be processed by your backend
server running locally

If you want to build for production then run:
```
npm run build
```
which will create a bundle and html file ready for serving in `../public` where
the current directory is the app repo. 

### Setting up a new application ###
There are lots of comments in:
* src/components/lesson/qtypes/index.js
* src/components/lesson/qtypes/example.question.vue
* src/components/class/index.vue
* src/api/index.js
* src/vuex/store.js

You should read the comments and compare these example application source files
with the corresponding HVU EE application files. See the HVU EE installation 
instructions as well.

More will be written here in the future.

### Resources
The application is currently running on Vue 1.0 so you should be reading the 
1.0 docs instead of the 2.0 docs
http://v1.vuejs.org/guide/

* vuex (like redux for vue): https://github.com/vuejs/vuex/tree/1.0/docs/en
* vue-router: https://github.com/vuejs/vue-router/tree/1.0/docs/en
