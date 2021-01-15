import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
	selector: 'ns-splash-screen',
	templateUrl: './launch_screen.component.html'
})

export class LaunchScreenComponent implements OnInit {
	
	
	public loadingText: String = 'loading';
	private timeScreen = 0;
	private count = 0;
	private id ;
	
	constructor(public routerExtensions: RouterExtensions, private page: Page ) { 
		this.page.actionBarHidden = true;
		
	}

	ngOnInit() {

		this.id = setInterval(()=>{
			//burg sur le setInterval pour corriger 
			if(this.timeScreen < 3000){ 	
			this.timeScreen +=400;
			if(this.count===3){
				this.count = 0;
				this.loadingText = 'Loading'
			}else {
					this.loadingText +='.';
					this.count++;
			}
			}else{
			this.routerExtensions.navigate(['home'],{clearHistory:true});
			}
		},100)
		

		
	 }

	 ngOnDestroy() {
		if (this.id) {
		  clearInterval(this.id);
		}
	  }
}
