import {Component} from "@angular/core";
import {HomePage} from "../home/home";
import {DetailsPage} from "../details/details";

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

    private tab1Root:any;
    private tab2Root:any;

    constructor() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = DetailsPage;
    }
}
