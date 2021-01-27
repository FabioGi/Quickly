import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { EventData } from '@nativescript/core';
import { Page } from 'tns-core-modules/ui/page';
import { DataService } from '~/app/shared/data.service';

@Component({
	selector: 'questionnaire-qcm',
	templateUrl: './questionnaire-qcm.component.html'
})

export class QuestionnaireQcmComponent implements OnInit {
    index: any;
    title: any;
    exercises: any;
    item: number;
    ischecked = false;
    @ViewChild('checked1', { static: true }) checked1: ElementRef;
    @ViewChild('checked2', { static: true }) checked2: ElementRef;
    @ViewChild('checked3', { static: true }) checked3: ElementRef;
    @ViewChild('checked4', { static: true }) checked4: ElementRef;
    response: any;
    correct: any;
    message = "";
    showResponse: boolean;
    checkIt: boolean;

    constructor(private page: Page,
        public routerExtensions: RouterExtensions,
        private ds: DataService,
        private route: ActivatedRoute) {
        this.page.actionBarHidden = true;
 }

	ngOnInit() {
        this.index =  +this.route.snapshot.params.id1;
        this.title = this.route.snapshot.params.id2;
        this.exercises = this.ds.getExerciseOrderById(this.index, this.title);
        this.item = this.index + 1  ;
        this.ds.displayPub()
        // console.log(this.ds.getScore());
     }

    sentResponse(){
        this.routerExtensions.navigate(['home','appar',this.item,this.title])
    }

    selectImage(data, args: EventData){
        this.showResponse = true;
        if(!this.ischecked){
            this.checked1.nativeElement.backgroundColor="#007bff";
            this.checked2.nativeElement.backgroundColor="#007bff";
            this.checked3.nativeElement.backgroundColor="#007bff";
            this.checked4.nativeElement.backgroundColor="#007bff";
            const arg = args.object as any;
            // arg.color = 'white' FF0000;
            console.log(data, this.exercises.answer)
            if( data ==  this.exercises.answer){
                this.checkIt = true;
               // this.showResponse = true;
                this.message = "    BRAVO C'EST CORRECT";
                 arg.backgroundColor="#008000";
                 this.ds.setScore(10);
            }else{
                this.message = "    REPONSE INCORRECTE";
                this.checkIt = false;
                 //this.showResponse = false;
                // console.log("result", data.name ==  this.exercises.answer)
                arg.backgroundColor="#FF0000";
                switch(this.verifyResponse()){
                    case 1: this.checked1.nativeElement.backgroundColor="#008000";
                    break;
                    case 2: this.checked2.nativeElement.backgroundColor="#008000";
                    break;
                    case 3: this.checked3.nativeElement.backgroundColor="#008000";
                    break;
                    case 4: this.checked4.nativeElement.backgroundColor="#008000";
                    break;
                }
            }
             this.ischecked = true;
        }

    }

    verifyResponse(){
       var response =  this.exercises.suggestions.findIndex(data => data === this.exercises.answer);
       return response + 1 ;
    }
}
