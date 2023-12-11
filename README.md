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

webpack-react> npm i  @babel/preset-react -D

All dependencies and transitive-dependencies are installed in "node_modules" folder

Team members --> download the project minus "node_modules" folder and
run

webpack-react> npm install

====================================

webpack & webpack-cli ==> build tools for uglify, minify, bundle

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. 

TypeScript Compiler ==> Typescript code to  JavaScript code that can be run by older JavaScript engines.

@babel/core --> Babel Transpiler / Transcompiler / pre-processor

babel-loader --> loads imported JS file using ESModule system into memory
Example:
Product.js
code

Other file:
import Product from './Product';

babel-loader --> load file into memory --> @babel/core --> transcompile --> lower version

https://caniuse.com/

Polyfill: A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). 

* babel-loader, @babel/core, @babel/preset-env


ES 6 module system uses: [ babel-loader knows this]
export and import

CommonJS module system [ default by NodeJS] uses:
module.exports and require

```
npm run dev
asset bundle.js 4.39 KiB [emitted] (name: main)

npm run prod
asset bundle.js 147 bytes [emitted] [minimized] (name: main)
```

HtmlWebpackPlugin
The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
<script src="dist/bundle.greer24@.js"></script>
<script src="dist/bundle.@52d#211.js"></script>

<script src="dist/bundle.js"></script> --> cachenpm i webpack-dev-server -D in browser

=====

webpack-dev-server

npm i webpack-dev-server -D

 "start": "webpack serve --mode development",

 npm start

 ===

 css-loader allows us to import css file in "js"
 import './style.css';

 loaded css file is given to "style-loader";
 style-loader places the code in 
 <style>
</style>

=============

React without using react library:

React Demystify:


var Welcome = React.createElement("div", {
  className: "card"
}, React.createElement("h1", {
  className: "card-header"
}, "React Welcome"), React.createElement("p", null, "Good Day!!!"));


====

React.createElement() is the core React API --> wrapper for 
document.createElement()
source maps 
https://webpack.js.org/configuration/devtool/
 devtool: "cheap-module-source-map",

 =============

 React Node: are not real DOM nodes, but a representation of a potential DOM node.
 The representation is considered as the "VirtualDOM"
 React Node can be: ReactElement, ReactFragment, a string, a number, array of React nodes, null, undefined, boolean

JSX.Element is a ReactElement with generic type["like h1, div,.."], props and can have children

======================

Reconcillation --> to be explained.

npx create-react-app customerapp

npx create-react-app customerapp --template typescript

npx is [npm install + execute]

react-scripts --> internally executes "Webpack commands"

=========

Rendering --> visual element [ DOM for Web, for TV, for Desktop, ...]
https://github.com/chentsulin/awesome-react-renderer


https://claudiopro.github.io/react-fiber-vs-stack-demo/

Upto React 17 version: Stack architecture
```
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));
```

From React 18 version onwards: Fiber architecture, concurrency
```
import ReactDOM from 'react-dom/client';
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);

```

How to create React elements?
* React.createElement
* class components --> around 2%
* functional components --> around 98%

class components
* extends Component [inheritance]
* can have state and behaviour
* should have render() method to return JSX
* state and props are pre-defined
props --> data passed from parent to child [ attributes & children]
https://react.dev/learn/thinking-in-react


Reconcillation is a process of finding VDOM difference and trigger re-rendering of components

https://legacy.reactjs.org/docs/reconciliation.html
