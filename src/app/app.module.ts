import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {TabsPage} from "../pages/tabs/tabs";
import {Ionic2PushApp} from "./app";
import {HomePage} from "../pages/home/home";
import {DetailsPage} from "../pages/details/details";


@NgModule({
  declarations: [
    Ionic2PushApp,
    TabsPage,
    HomePage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(Ionic2PushApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Ionic2PushApp,
    TabsPage,
    HomePage,
    DetailsPage
  ]
})
export class AppModule {
}
