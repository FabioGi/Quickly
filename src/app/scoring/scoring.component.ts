import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "tns-core-modules/ui/page";
import { DataService } from "../shared/data.service";
import { User } from "../shared/user";
// import { GestureEventData } from "tns-core-modules/ui/gestures";
// import { Image } from "ui/image";

@Component({
    selector: "scoring",
    templateUrl: "./scoring.component.html"
})
export class ScoringComponent implements OnInit {
    title: string;
    score: string;
    user: User;
    constructor( private page: Page,
        private ds: DataService,
        private route: ActivatedRoute,
        public routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
        this.title =  this.route.snapshot.params.title;
        this.score =  this.route.snapshot.params.score;
        console.log(this.score, "score")
    }

    ngOnInit(): void {
       this.ds.initScore();
       this.ds.displayPub()
    }

    checkTitle(title){
        var data ;
        switch(title){
           case 'A table': data = 'Les animaux familiers';
                           this.ds.score1 = +this.score;
                           console.log(this.ds.score1);
                           console.log(data);
           break;
           case 'Les animaux familiers': data = 'Les animaux sauvages';
                                          this.ds.score2 = +this.score;
                                          console.log(this.ds.score2);
                                          console.log(data);
           break;
           case 'Les animaux sauvages': data = 'home';
                                        this.ds.score3 = +this.score;
                                        console.log(this.ds.score3);
                                        console.log(data);
           break;
        }
        return data ;
    }

    getPage(){
        this.checkTitle(this.title)
        this.routerExtensions.navigate(['home']);
        // if(this.checkTitle(this.title ) === 'home') return this.routerExtensions.navigate(['home']);
        // else return this.routerExtensions.navigate(['home','exercice', this.checkTitle(this.title)]);
    }

}
