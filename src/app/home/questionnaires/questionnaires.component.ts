import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { EventData, Label } from '@nativescript/core';
import { TNSPlayer } from 'nativescript-audio-player';
import { Page } from 'tns-core-modules/ui/page';
import { DataService } from '~/app/shared/data.service';

//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

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
    @ViewChild('checked', { static: true }) checked: ElementRef;
    @ViewChild('checked1', { static: true }) checked1: ElementRef;
    @ViewChild('checked2', { static: true }) checked2: ElementRef;
    @ViewChild('checked3', { static: true }) checked3: ElementRef;

   // checker = this.page.getViewById("checker");
    private _player: TNSPlayer;
    verify: boolean = false;
    response: any;
    response_image: any;
    correct: any;
    correct_image: any;

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
    }

    imagePath(index,data){
        return this.ds.imagePath(index,data);
    }

    selectImage(data, args: EventData){
        this.checked1.nativeElement.backgroundColor="#007bff";
        this.checked.nativeElement.backgroundColor="#007bff";
        this.checked2.nativeElement.backgroundColor="#007bff";
        this.checked3.nativeElement.backgroundColor="#007bff";
        const arg = args.object as any;
        // arg.color = 'white';
        arg.backgroundColor="red";
        this.initPlayer(data.media);
        this._player.play();
        this.verify = true;
        this.response = data.name;
        this.response_image = data.image;
        this.correct = this.exercises.answer;
        this.correct_image = this.exercises.answer_image;
    }

    sentResponse(id,title){
        this.routerExtensions.navigate(['home','resultat44',id,title,this.response,
        this.response_image,this.correct,this.correct_image]);
        console.log(this.response,this.response_image, this.correct, this.correct_image);
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
