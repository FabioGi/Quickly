import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '~/app/shared/data.service';
import { TNSPlayer } from 'nativescript-audio-player';
import { EventData } from '@nativescript/core';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import { PanGestureEventData } from "tns-core-modules/ui/gestures";
// import { SwipeGestureEventData } from '@nativescript/core/ui/gestures';
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { Image } from "tns-core-modules/ui/image";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { trigger, transition, animate, style, state, keyframes, AnimationEvent } from '@angular/animations';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { AnimationCurve } from "tns-core-modules/ui/enums";

@Component({
	selector: 'questionnaire-switch',
    templateUrl: './questionnaire-switch.component.html',
    animations: [
        trigger('swipeBottom', [
            state('true', style({ opacity: 1 })),
            transition('* => true', [
              style({  opacity: 1, transform: "translateY(0)" }),
              animate('0.4s ease-in', style({ opacity: 0,transform: "translateY(1000)" }))
            ])
          ])
      ]
})

export class QuestionnaireSwitchComponent implements OnInit {
    title: number;
    index: number;
    exercises: any;
    item: number;
    args?: EventData
    @ViewChild('checked1', { static: true }) checked1: ElementRef;
    @ViewChild('checked2', { static: true }) checked2: ElementRef;
    @ViewChild('checked3', { static: true }) checked3: ElementRef;
    private _player: TNSPlayer;
    verify: boolean = false;
    response: any;
    response_image: any;
    correct: any;
    correct_image: any;
    // drag
    @ViewChild('dragImage1', { static: true }) dragImage1: ElementRef;
    @ViewChild('dragImage2', { static: true }) dragImage2: ElementRef;
    @ViewChild('container', { static: true }) container: ElementRef;
    itemContainer: StackLayout;
    dragImageItem1: Image;
    dragImageItem2: Image;
    prevDeltaX: number;
    prevDeltaY: number;
    //
    animationTrigger = false;
    message: string;
    constructor(private page: Page,
        public routerExtensions: RouterExtensions,
        public route: ActivatedRoute,
        private ds: DataService) {
        this.page.actionBarHidden = true;
 }

	ngOnInit() {
        this.index =  +this.route.snapshot.params.id1;
        this.title = this.route.snapshot.params.id2;
        this.exercises = this.ds.getExerciseOrderById(this.index, this.title);
        this.item = this.index + 1 ;
        this._player = new TNSPlayer();
        // console.log(this.item)
        // console.log(this.exercises) [5.712890625, 67.14146205357144
        this.itemContainer = <StackLayout>this.container.nativeElement;
        this.dragImageItem1 = <Image>this.dragImage1.nativeElement;
        this.dragImageItem1.translateX =  0;
        this.dragImageItem1.translateY =  26;
        this.dragImageItem1.scaleX = 1;
        this.dragImageItem1.scaleY = 1

        this.play_response();
    }

    imagePath(index,data){
       return this.ds.imagePath(index,data)
    }

    play_response(){
        this.initPlayer(this.exercises.answer_media);
        this._player.play();
    }

    selectImage(data, args?: EventData){
        console.log(data.name)
        this.verify = true;
        this.checked3.nativeElement.backgroundColor="#008000";
        if( data.name ==  this.exercises.answer){
            this.message = "    BRAVO C'EST CORRECT"
            switch(this.verifyResponse()){
                case 1: this.checked1.nativeElement.backgroundColor="#008000";
                break;
                case 2: this.checked2.nativeElement.backgroundColor="#008000";
                break;
            }
        }else{
            this.message = "    REPONSE INCORRECT"
            switch(this.verifyResponse()){
                case 1: this.checked1.nativeElement.backgroundColor="#008000";
                        this.checked2.nativeElement.backgroundColor="#FF0000";
                break;
                case 2: this.checked2.nativeElement.backgroundColor="#008000";
                        this.checked1.nativeElement.backgroundColor="#FF0000";
                break;
            }
          }
    }

    verifyResponse(){
        var response =  this.exercises.suggestions.filter((data) => data.name == this.exercises.answer);
        return response[0].id ;
     }

    sentResponse(id,title){
        this.routerExtensions.navigate(['home','result-switch',id,title,this.response,
        this.response_image,this.correct,this.correct_image]);
        // console.log(this.response,this.response_image, this.correct, this.correct_image);
    }

    initPlayer(mp3){
        console.log("le song",mp3)
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

      onPan1(args: PanGestureEventData ) {
          if(!this.verify){
            if (args.state === 1) // down
            {
              this.prevDeltaX = 0;
              this.prevDeltaY = 0;
            }
            else if (args.state === 2) // panning
            {
              this.dragImageItem1.translateX += args.deltaX - this.prevDeltaX;
              this.dragImageItem1.translateY += args.deltaY - this.prevDeltaY;

              this.prevDeltaX = args.deltaX;
              this.prevDeltaY = args.deltaY;

              // calculate the conversion from DP to pixels
              let convFactor = +this.dragImageItem1.width / this.dragImageItem1.getMeasuredWidth();
              let edgeX = (this.itemContainer.getMeasuredWidth() - this.dragImageItem1.getMeasuredWidth()) * convFactor;
              let edgeY = (this.itemContainer.getMeasuredHeight() - this.dragImageItem1.getMeasuredHeight()) * convFactor;

              // X border
              if (this.dragImageItem1.translateX < 0) {
                this.dragImageItem1.translateX = 0;
              }
              else if (this.dragImageItem1.translateX > edgeX) {
                this.dragImageItem1.translateX = edgeX;
              }

              // Y border
              if (this.dragImageItem1.translateY < 0) {
                this.dragImageItem1.translateY = 0;
              }
              else if (this.dragImageItem1.translateY > edgeY) {
                this.dragImageItem1.translateY = edgeY;
              }
            }
             else if (args.state === 3){
                 if( this.dragImageItem1.translateY == 0 ) this.selectImage(this.exercises.suggestions[0]);
                 else this.selectImage(this.exercises.suggestions[1]);


            // this.dragImageItem1.animate({
            //     translate: { x: 0, y: 0 },
            //     duration: 1000,
            //     curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            //     });
            // console.log(args.state)
            }
          }
      }

    //   onSwipe(args: SwipeGestureEventData) {
    //     switch(args.direction) {
    //         case 8:
    //             setTimeout(() => {
    //                 this.selectImage(this.exercises.suggestions[1]);
    //                  console.log('swipe ', args.direction);
    //             }, 0)
    //            // this.animationTrigger = true;
    //             break;
    //         case 4:
    //             setTimeout(() => {
    //                  this.selectImage(this.exercises.suggestions[0]);
    //                 console.log('swipe', args.direction);
    //              }, 0)
    //              // this.animationTrigger = true;
    //              break;
    //     }
    // }

}
