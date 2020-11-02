import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import {Page} from "tns-core-modules/ui/page"
import {ScrollView} from "tns-core-modules/ui/scroll-view"
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout"
import {Label} from "tns-core-modules/ui/label"
import { TabView } from "tns-core-modules/ui/tab-view";
import { DataItem, DataService } from "~/app/shared/data.service";


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
    items: Array<DataItem>;
    scrollLayout: ScrollView = null ;
    contentContainer: StackLayout  = null ;

    constructor(private _itemService: DataService,
        public routerExtensions: RouterExtensions,
        public page: Page) { }
        // onScroll(args: ScrollEventData) {
        //     const scrollView = args.object as ScrollView;

        //     console.log("scrollX: " + args.scrollX);
        //     console.log("scrollY: " + args.scrollY);
        // }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
        // this.scrollLayout = this.page.getViewById("myScroller") as ScrollView;
        // this.contentContainer = this.page.getViewById("contentContainer") as StackLayout;
        // for (let index = 0; index <= numLabel; index++) {
        //     const lbl = new Label();
        //     lbl.className = 'my-lbl';
        //     lbl.text = index.toString();
        //     this.contentContainer.addChild(lbl);
        // }
    }
}
