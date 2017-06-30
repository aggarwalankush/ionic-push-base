import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { DetailsPage } from '../details/details';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any;
  tab2Root: any;

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = DetailsPage;
  }
}
