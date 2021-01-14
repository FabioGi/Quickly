import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from 'tns-core-modules/ui/page';
import { DataService } from '~/app/shared/data.service';
import { TNSPlayer } from 'nativescript-audio-player';

@Component({
	selector: 'appariement',
	templateUrl: './appariement.component.html'
})

export class AppariementComponent implements OnInit {
    tvtext = "";
    index: any;
    title: any;
    exercises: any;
    item:number;
    responseList = []
    @ViewChild('response', { static: true }) response: ElementRef;
    message: string;
    private _player: TNSPlayer;
    goodResponse: any;
    verify = false;

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
        this.item = this.index + 1;
        this._player = new TNSPlayer();
        this.play_response();
     }

     apparier(word){
        const index = this.exercises.suggestions.findIndex(it => it === word);
        this.responseList.push(word)
        this.exercises.suggestions.splice(index, 1);
        this.verify = true;
     }

     removeResponse(word){
         if(this.responseList.length){
            const index = this.responseList.findIndex(it => it === word);
            this.exercises.suggestions.push(word)
            this.responseList.splice(index, 1);
         }
     }

     checkResponse(){
            const answer = this.exercises.answer ;
            if(answer === this.responseList.join(" ")){
               this.response.nativeElement.backgroundColor="green";
               this.message = "    Bravo c'est une bonne reponse"
               this.ds.setScore(10);
            }else{
               this.response.nativeElement.backgroundColor="#FF0000";
               this.message = "    Reponse incorrect"
               this.goodResponse =  this.exercises.answer ;
            }
            console.log(this.item)
            if(this.item === 8){
                setTimeout(()=> this.routerExtensions.navigate(['scoring','score',this.title,this.ds.getScore()]),
                5000);
            } else{
                setTimeout(()=> this.routerExtensions.navigate(['home','questionnaire',+this.item,this.title]),
                5000);
            }

     }

     play_response(){
        this.initPlayer(this.exercises.media);
        this._player.play();
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


// (tap)="routerExtensions.navigate(['home','exercice','Les animaux familiers'])"
