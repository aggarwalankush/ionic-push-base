import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  pushMessage: string = "push message will be displayed here";

  constructor(public params: NavParams) {
    if (params.data.message) {
      this.pushMessage = params.data.message;
    }
  }
}
