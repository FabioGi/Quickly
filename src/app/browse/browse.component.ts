import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';
import { Page } from "@nativescript/core";
import { DataService } from "../shared/data.service";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})

export class BrowseComponent implements OnInit {

    public items: string[] = [];
    exercices:any;
    lesson:any;
    constructor(public routerExtensions: RouterExtensions,
                public page: Page,
                private ds: DataService) {
        this.page.actionBarHidden = true;
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
       // this.exercices =  this.ds.getAllLessons();
       this.lesson = this.ds.getAllLessons();
       // console.log(this.exercices)
        // for (var i = 1; i < 20; i++) {
        //     this.items.push("Exercice " +  i);
        // }

        // Use the "ngOnInit" handler to initialize data for the view.
    }

    // routerGame(index){
    //     switch(index){
    //         case 0: this.routerExtensions.navigate(['home','questionnaire',+index,this.title]);
    //         break;
    //         case 1: this.routerExtensions.navigate(['home','switch',+index,this.title]);
    //         break;
    //         case 2: this.routerExtensions.navigate(['home','qcm',+index,this.title]);
    //         break;
    //         case 3: this.routerExtensions.navigate(['home','appar',+index,this.title]);
    //         break;
    //         case 4: this.routerExtensions.navigate(['home','quatre-bis',+index,this.title]);
    //         break;
    //         case 5: this.routerExtensions.navigate(['home','switch-bis',+index,this.title]);
    //         break;
    //         case 6: this.routerExtensions.navigate(['home','qcm-bis',+index,this.title]);
    //         break;
    //         case 7: this.routerExtensions.navigate(['home','apar-bis',+index,this.title]);
    //         break;
    //         default: this.routerExtensions.navigate(['home']);

    //      }
    // }

}
