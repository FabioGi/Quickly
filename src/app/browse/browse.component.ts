import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';
import { Page, ScrollView, StackLayout } from "@nativescript/core";
import { DataItem, DataService } from "../shared/data.service";

@Component({
    selector: "app-browse",
    templateUrl: "./browse.component.html"
})

export class BrowseComponent implements OnInit {

    // public items: string[] = [];
    // exercices:any;
     lesson:any;
    items: Array<DataItem>;
    scrollLayout: ScrollView = null ;
    contentContainer: StackLayout  = null ;
    result = false;
    module:any;
    constructor(public routerExtensions: RouterExtensions,
                public page: Page,
                private ds: DataService,
                private _itemService: DataService) {
        // this.page.actionBarHidden = true;
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
       // this.exercices =  this.ds.getAllLessons();
       this.lesson = this.ds.getAllLessons();
       this.items = this._itemService.getItems();
       // console.log(this.exercices)
        // for (var i = 1; i < 20; i++) {
        //     this.items.push("Exercice " +  i);
        // }

        // Use the "ngOnInit" handler to initialize data for the view.
    }

}
