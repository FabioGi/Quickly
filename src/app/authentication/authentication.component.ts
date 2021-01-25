import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';
import { confirm } from '@nativescript/core/ui/dialogs';

@Component({
	selector: 'authentication',
	templateUrl: './authentication.component.html'
})

export class AuthenticationComponent implements OnInit {
    pseudo: string;
    password: string;
    constructor(public routerExtensions: RouterExtensions,
        private page: Page) {
         }

    ngOnInit() { }

    connexion(){
        if(this.pseudo && this.password == "Quickly")
            this.routerExtensions.navigate(['/launch_screen']);
        else{
            this.DisplayMessage();
            this.pseudo = "";
            this.password = "";
        }
        console.log(this.pseudo, this.password)
        //
    }

    public DisplayMessage() {
        let options = {
            title: "Attention !",
            message: "Pseudo ou mot de passe incorrect, veuillez vous reconnecter!",
            okButtonText: "oui"
        };
        return confirm(options)
    }
}
