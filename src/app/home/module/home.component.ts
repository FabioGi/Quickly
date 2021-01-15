import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import {Page} from "tns-core-modules/ui/page"
import {ScrollView} from "tns-core-modules/ui/scroll-view"
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout"
import {Label} from "tns-core-modules/ui/label"
import { TabView } from "tns-core-modules/ui/tab-view";
import { DataItem, DataService } from "~/app/shared/data.service";
import { EventData } from "@nativescript/core";
import { User } from "~/app/shared/user";


// import { StackLayout } from "@nativescript/core/ui/layouts/stack-layout";
// import { Page } from "@nativescript/core/ui/page";
// import { Page } from "@nativescript/core/ui/page";
// import { ScrollEventData, ScrollView } from "@nativescript/core/ui/scroll-view";

// import { DataService, DataItem } from "../../shared/data.service";
const numLabel = 50 ;

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    // list
    public items: string[] = [];
    exercices:any;
    lesson:any;
    user:User;
    score1 : number;
    score2 : number;
    score3 : number;
    score = [];

    constructor(
        public routerExtensions: RouterExtensions,
        public page: Page,
        public ds: DataService) {
            this.page.actionBarHidden = true;
        }

    ngOnInit(): void {
        // list
        this.lesson = this.ds.getAllLessons();
        this.score1 = this.ds.score1?this.ds.score1:0
        this.score2 = this.ds.score2?this.ds.score2:0
        this.score3 = this.ds.score3?this.ds.score3:0
        this.score = [ this.score1, this.score2, this.score3];
    }

    routerGame(index,title){
        switch(index){
            case 0: this.routerExtensions.navigate(['home','questionnaire',+index,title]);
            break;
            case 1: this.routerExtensions.navigate(['home','switch',+index,title]);
            break;
            case 2: this.routerExtensions.navigate(['home','qcm',+index,title]);
            break;
            case 3: this.routerExtensions.navigate(['home','appar',+index,title]);
            break;
            case 4: this.routerExtensions.navigate(['home','quatre-bis',+index,title]);
            break;
            case 5: this.routerExtensions.navigate(['home','switch-bis',+index,title]);
            break;
            case 6: this.routerExtensions.navigate(['home','qcm-bis',+index,title]);
            break;
            case 7: this.routerExtensions.navigate(['home','apar-bis',+index,title]);
            break;
            default: this.routerExtensions.navigate(['home']);

         }
    }

    navigate(index, title){
        this.routerExtensions.navigate(['home','questionnaire',+index,title]);
    }


}
