import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';


@Component({
	selector: 'ns-splash-screen',
	templateUrl: './launch_screen.component.html'
})

export class LaunchScreenComponent implements OnInit {
	
	
	public loadingText: String = 'loading';
	private timeScreen = 0;
	private count = 0;
	constructor(public routerExtensions: RouterExtensions) { }

	ngOnInit() {
		setInterval (() =>{
					if(this.timeScreen < 8000) {
						this.timeScreen +=400;
						if(this.count===3){
							this.count = 0;
							this.loadingText = 'Loading'
						}else {
							this.loadingText +='.';
							this.count++;
						}
					}else{
						this.routerExtensions.navigate(['/auth'],{clearHistory:true});
					}
		}, 400)

	 }
}
