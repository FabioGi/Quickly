import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { EventData, Label } from '@nativescript/core';
import { TNSPlayer } from 'nativescript-audio-player';
import { Page } from 'tns-core-modules/ui/page';
import { DataService } from '~/app/shared/data.service';

@Component({
	selector: 'questionnaires',
	templateUrl: './questionnaires.component.html',

})

export class QuestionnairesComponent implements OnInit {
    exercises: any;
    id2: any;
    id: number;
    title: number;
    col: string;
    @ViewChild('checked1', { static: true }) checked1: ElementRef;
    @ViewChild('checked2', { static: true }) checked2: ElementRef;
    @ViewChild('checked3', { static: true }) checked3: ElementRef;
    @ViewChild('checked4', { static: true }) checked4: ElementRef;
    message = "";
    private _player: TNSPlayer;
    verify: boolean = false;
    response: any;
    response_image: any;
    correct: any;
    correct_image: any;
    ischecked = false;
    showResponse: boolean;
    checkIt: boolean;

    constructor(private page: Page,
               public routerExtensions: RouterExtensions,
               private ds: DataService,
               private route: ActivatedRoute,
               ) {
        this.page.actionBarHidden = true;
        // player
        this._player = new TNSPlayer();
    }
	ngOnInit() {
        this.id =  +this.route.snapshot.params.id1;
        this.title = this.route.snapshot.params.id2;
       this.exercises = this.ds.getExerciseOrderById(this.id, this.title);
       this.ds.displayPub()
       // console.log(this.ds.getScore());
    }

    imagePath(index,data){
        return this.ds.imagePath(index,data);
    }

    selectImage(data, args: EventData){
        if(!this.ischecked){
            this.showResponse = true;
            this.checked1.nativeElement.backgroundColor="#007bff";
            this.checked2.nativeElement.backgroundColor="#007bff";
            this.checked3.nativeElement.backgroundColor="#007bff";
            this.checked4.nativeElement.backgroundColor="#007bff";
            const arg = args.object as any;
            // arg.color = 'white' FF0000;
            if( data.name ==  this.exercises.answer){
                arg.backgroundColor="#008000"
                this.message = "    BRAVO C'EST CORRECT"
                this.ds.setScore(10);
                this.checkIt = true;
            }else{
                this.message = "    REPONSE INCORRECT"
                arg.backgroundColor="#FF0000";
                this.checkIt = false;
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
            this.initPlayer(data.media);
            this._player.play();
            this.verify = true;
            this.response = data.name;
            this.response_image = data.image;
            this.correct = this.exercises.answer;
            this.correct_image = this.exercises.answer_image;
            this.ischecked = true;
        }

    }

    verifyResponse(){
       var response =  this.exercises.suggestions.filter((data) => data.name == this.exercises.answer);
       return response[0].id ;
    }

    sentResponse(){
        this.routerExtensions.navigate(['home','switch',this.id+1,this.title]);
    }

    initPlayer(mp3){
        this._player.debug = true; // set true to enable TNSPlayer console logs for debugging.
        this._player
          .initFromFile({
            audioFile: '~/assets/media/'+mp3, // ~ = app directory
            loop: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
          })
          .then(() => {
            this._player.getAudioTrackDuration().then(duration => {
              // iOS: duration is in seconds
              // Android: duration is in milliseconds
              console.log(`song duration:`, duration);
            });
          });
    }

    public togglePlay() {
        if (this._player.isAudioPlaying()) {
          this._player.pause();
        } else {
          this._player.play();
        }
      }

      private _trackComplete(args: any) {
        console.log('reference back to player:', args.player);
        // iOS only: flag indicating if completed succesfully
        console.log('whether song play completed successfully:', args.flag);
      }

      private _trackError(args: any) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);
        // Android only: extra detail on error
        console.log('extra info on the error:', args.extra);
      }

}
