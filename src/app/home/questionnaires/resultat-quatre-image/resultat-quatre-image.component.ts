import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from 'tns-core-modules/ui/page';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'resultat-quatre-image',
	templateUrl: './resultat-quatre-image.component.html',
})

export class ResultatQuatreImageComponent implements OnInit {
    result: boolean = false;
    constructor(private page: Page,
        public routerExtensions: RouterExtensions) {
       this.page.actionBarHidden = true;
}

	ngOnInit() { }
}
