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
    constructor(public routerExtensions: RouterExtensions,
                public page: Page,
                private ds: DataService) {
        this.page.actionBarHidden = true;
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.exercices =  this.ds.getAllLessons();
       // console.log(this.exercices)
        // for (var i = 1; i < 20; i++) {
        //     this.items.push("Exercice " +  i);
        // }

        // Use the "ngOnInit" handler to initialize data for the view.
    }

    printData(data){
        console.log(data)
    }

}
