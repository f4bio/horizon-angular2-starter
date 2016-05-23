import {Component} from "@angular/core";
// import Horizon from "/horizon/horizon.js";

@Component({
  selector: "cg-app",
  template: `<h1>My First Angular 2 App</h1>`
})
export class AppComponent {

  constructor() {
    //Setup Horizon connection
    const horizon = Horizon();

    horizon.onReady(function () {
      console.log("horizon-angular2 works!");
    });
    horizon.connect();
  }
}
