# REACT
Banu Prakash C

Full Stack Architect, Co-founder Lucida Technologies Pvt Ltd., and Corporate Trainer.

Emails: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

Softwares Required:
Visual Studio Code, Chrome Web Browser, NodeJS Latest LTS

================

Server Side Rendering and Client side Rendering

Rendering ==> data to presentation


Server Side Rendering:
Pros:
1) Thin clients
2) SEO
3) Faster and improves Core Web Vitals [ FCP, TTFB, ...]

Cons:
1) We can't have heterogenous clients
2) for every request payload is more


Client side Rendering:
Pros:
1) heterogenous clients
2) Payload is light --> only JSON / XML is sent for every request

Cons:
1) Not good for SEO
2) clients are heavy

==========================

Client side Rendering using Web technologies for web browsers:

1) JavaScript --> DOM [create element, delete element, traverse, event handling]
document.createElement("div");
document.querySelectorAll("div");
2) jQuery --> library which simplified DOM handling and making API calls to server
$("<div>")
$("div");

Single Page Applications: one html --> index.html has many views [different URLs shows different views]

3) Templates
* Handlebars
* Mustache
* Underscore
* EJS
* PUG
* JADE
...

Example:
```
Representation from Server:
{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ]
}

Template:
<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>

Output:
<ul class="people_list">
    <li>Yehuda Katz</li>
    <li>Alan Johnson</li>
    <li>Charles Jolley</li>
</ul>
```
Lots of libraries and Frameworks
4) Backbone --> library based on MVC architectural pattern
Model --> represent the data
View --> presentation
Controller --> handle UI interaction

Backbone gave Model and Controller support, for views we had to choose one of the templates

5) Google --> AngularJS --> Framework based on MVC pattern

6) Facebook
6.1) XHP --> 2010 --> Marcel Laverdet
XML in PHP
6.2) FaxJS --> 2011 --> Jordan
6.3) ReactJS --> 2012 ==> view Library
--> JSConf
2013 --> Open Source

Khan Academy --> Sophie Alpert

2015 --> React became stable --> Netflix, Airbnb uses
2015 --> Dan Abramov --> State managment

https://www.youtube.com/watch?v=8pDqJVdNa44

7) Angular --> MVC Framework

8) Vue..

================

React --> View Library

* We need an environment to develop React applications --> NodeJS

NodeJS is a platform for running server side JS applications / building client side application

Building client side application:
1) We can write the code in different languages like TypeScript, CoffeeScript, LiveScript, DART, Latest version of JavaScript [ ECMAScript 2015[6], 2020[7]]
But the browser just understands JavaScript

ProductComponent.ts --> tsc --> ProductComponent.js --> goes to browser

JS:
let name = "Smith";
name = 23; // valid

TS:
let name:string = "Smith";
name = 23; // compilation error by tsc

2) Platform to minify, uglify, bundle

let customerAddress = "";
let _c = ""; //uglify

Bundling
40-80 JS files
<srcipt src="a.js"> </script>
<srcipt src="b.js"> </script>
<srcipt src="c.js"> </script>
<srcipt src="d.js"> </script>
<srcipt src="e.js"> </script>
<srcipt src="f.js"> </script>

* There will a network call from browser to server for each <script> tag and <link>
* Order of scripts is important

Solution ==> put all of then in bundle.js
<srcipt src="bundle.js"> </script>

3) Run Unit testing/ Integration Testing and E2E testing

==========

Development tools on NodeJs
 JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting

* Grunt, Gulp, Webpack, Vite, .....

Webpack --> default tool used by frameworks like Angular and libraries like React.

=========

Build hello world react application using Webpack from scratch.

1) initilize a node project
webpack-react> npm init --y
creates package.json
--> place where scripts are configured
--> place where all dependencies and "development dependencies" are configured

webpack-react> npm i webpack webpack-cli html-webpack-plugin css-loader style-loader -D

webpack-react> npm i babel-loader @babel/core @babel/preset-env -D

webpack-react> npm i react react-dom

All dependencies and transitive-dependencies are installed in "node_modules" folder