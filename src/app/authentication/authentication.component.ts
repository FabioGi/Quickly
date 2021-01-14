import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'authentication',
	templateUrl: './authentication.component.html'
})

export class AuthenticationComponent implements OnInit {

    constructor(public routerExtensions: RouterExtensions,
        private page: Page) {
           // this.page.actionBarHidden = true;
         }

	ngOnInit() { }
}
