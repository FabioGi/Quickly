import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';
import { Page } from "@nativescript/core";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})

export class BrowseComponent implements OnInit {

    public items: string[] = [];
    constructor(public routerExtensions: RouterExtensions,
                public page: Page) {
        this.page.actionBarHidden = true;
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        for (var i = 1; i < 20; i++) {
            this.items.push("Exercice " +  i);
        }

        // Use the "ngOnInit" handler to initialize data for the view.
    }

}
