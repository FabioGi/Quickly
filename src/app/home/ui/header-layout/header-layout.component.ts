import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { confirm } from '@nativescript/core/ui/dialogs';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'header-layout',
	templateUrl: './header-layout.component.html'
})

export class HeaderLayoutComponent implements OnInit {

	constructor(public routerExtensions: RouterExtensions) { }

    ngOnInit() { }

    displayAlertConnection(msg?: string) {
        let options = {
            title: "Attention !",
            message: msg ? msg : "Souhaitez vous vraiment quittez la leçon ? vous risquez de perdre votre score",
            okButtonText: "oui",
            neutralButtonText: "Non"
        };
        return confirm(options).then((r)=>{
                if(r== true ) return this.routerExtensions.navigate(["home"])
        })
    }
}
