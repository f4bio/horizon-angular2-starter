// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 2
import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";
import "@angular/core";
import "@angular/common";
import "@angular/http";
import "@angular/router";

// RxJS
// Statics
import "rxjs/add/observable/throw";
// Operators
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/toPromise";

// Angular 2 Material 2
import "@angular2-material/button";
import "@angular2-material/card";
import "@angular2-material/checkbox";
import "@angular2-material/sidenav";
import "@angular2-material/input";
import "@angular2-material/list";
import "@angular2-material/radio";
import "@angular2-material/progress-bar";
import "@angular2-material/progress-circle";
import "@angular2-material/toolbar";

// Other Angular 2 Modules
// import "angular2-logger/core";
// import "angular2-moment";
// import "angular2-notifications";
import "angular2-jwt";

// Other Modules
// import "@horizon/client";

// Styles
import "./styles/importer.scss";
