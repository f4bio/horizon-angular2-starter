// Polyfills
// These modules are what"s in angular 2 bundle polyfills so don"t include them
// import "es6-shim";
// import "es6-promise";
// import "reflect-metadata";

// CoreJS has all the polyfills you need
import "core-js/es6";
import "core-js/es7/reflect";
require("zone.js/dist/zone");

// Typescript emit helpers polyfill
import "ts-helpers";

if ("production" === __ENV__) {
  // Production
} else {
  // Development
  Error.stackTraceLimit = Infinity;
  require("zone.js/dist/long-stack-trace-zone");
}
