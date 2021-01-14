import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
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
}
