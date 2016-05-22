import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppComponent} from "./app/app.component";

if (__ENV__ === "production") {
  enableProdMode();
}
bootstrap(<any>AppComponent).catch((err) => {
  console.error(err);
});
