import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import {Page} from "tns-core-modules/ui/page"
import {ScrollView} from "tns-core-modules/ui/scroll-view"
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout"
import {Label} from "tns-core-modules/ui/label"
import { TabView } from "tns-core-modules/ui/tab-view";
import { DataItem, DataService } from "~/app/shared/data.service";
import { EventData } from "@nativescript/core";


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
    result = false;
    module:any;

    constructor(private _itemService: DataService,
        public routerExtensions: RouterExtensions,
        public page: Page,
        public ds: DataService) { }
        // onScroll(args: ScrollEventData) {
        //     const scrollView = args.object as ScrollView;

        //     console.log("scrollX: " + args.scrollX);
        //     console.log("scrollY: " + args.scrollY);
        // }

        amount: number;

        // libelle des mois depuis le html
        @ViewChild('mois12', { static: true }) mois12: ElementRef;
        @ViewChild('mois3', { static: true }) mois3: ElementRef;
        @ViewChild('mois1', { static: true }) mois1: ElementRef;

        // les containers des abonnements
        @ViewChild('cont12', { static: true }) cont12: ElementRef;
        @ViewChild('cont3', { static: true }) cont3: ElementRef;
        @ViewChild('cont1', { static: true }) cont1: ElementRef;

        // bouton continer
        @ViewChild('continuer', { static: true }) continuer: ElementRef;

        // stripe checkout zone
        cc : any;
        cardNumber = null;
        cardExpiryMonth = null;
        cardExpiryYear = null;
        cardCVC = null

        // l'utilisateur
        // currentUser: User;
        age: number;

    ngOnInit(): void {
        this.items = this._itemService.getItems();
      //  this.module = this.ds.currentLesson;
        // this.scrollLayout = this.page.getViewById("myScroller") as ScrollView;
        // this.contentContainer = this.page.getViewById("contentContainer") as StackLayout;
        // for (let index = 0; index <= numLabel; index++) {
        //     const lbl = new Label();
        //     lbl.className = 'my-lbl';
        //     lbl.text = index.toString();
        //     this.contentContainer.addChild(lbl);
        // }
    }

    selectAbonnement(args: EventData, mois: number) {

        // l'abonnement : montant - mois
        this.amount = mois*100;
       //  this.currentUser.abonnement = mois;

        this.resetCss();
        const arg = args.object as any;
        arg.color = 'white';
        arg.backgroundColor="#FE5000";
        this.continuer.nativeElement.backgroundColor = '#FE5000';


        switch(mois) {
            case 1:
                this.mois1.nativeElement.color='white';
                break;
            case 3:
                this.mois3.nativeElement.color='white';
                break;
            case 12:
                this.mois12.nativeElement.color='white';
                break;
            default:
        }
    }

    resetCss() {
        this.cont12.nativeElement.backgroundColor = 'white';
        this.cont3.nativeElement.backgroundColor = 'white';
        this.cont1.nativeElement.backgroundColor = 'white';

        this.cont12.nativeElement.color = 'black';
        this.cont3.nativeElement.color = 'black';
        this.cont1.nativeElement.color = 'black';

        this.mois12.nativeElement.color='#FE5000';
        this.mois3.nativeElement.color='#FE5000';
        this.mois1.nativeElement.color='#FE5000';
    }
}
