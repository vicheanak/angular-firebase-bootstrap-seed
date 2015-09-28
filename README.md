# angular-firebase-bootstrap-seed — the seed for AngularJS Firebase Bootstrap apps

This project is a simple to understand structure of AngularJS that contains Firebase and Bootstrap. 


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  controllers/                --> controller files
    home.js              --> home controller(HomeCtrl)
  directives/                --> directive files
    myDirective.js              --> there is a sample <my-div> inside
  app.js                --> main application module
  img/                  --> for storing images
  lib/                  --> libary files
    services.js         --> firebaseData service (config YOUR-FIREBASE-URL.firebaseio.com)
  templates/            --> template files .html
    home.html           --> button collapse animation
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
```

## Getting Started

To get you started you can simply clone the angular-firebase-bootstrap-seed repository and install the dependencies:

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/vicheanak/angular-firebase-bootstrap-seed.git
cd angular-firebase-bootstrap-seed
```

If you just want to start a new project without the angular-firebase-bootstrap-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/vicheanak/angular-firebase-bootstrap-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```
### Run the Application

```
npm start
```

Now browse to the app at `http://localhost:8000/app/home`.

## Bootstrap Documentation

https://angular-ui.github.io/bootstrap/

## AngularFire Documentation

https://www.firebase.com/docs/web/libraries/angular/api.html

