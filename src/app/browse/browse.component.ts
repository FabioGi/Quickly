import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {

    constructor(public routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
