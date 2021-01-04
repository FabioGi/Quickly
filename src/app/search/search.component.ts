import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { PanGestureEventData } from "tns-core-modules/ui/gestures";
import { Image } from "tns-core-modules/ui/image";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { AnimationCurve } from "tns-core-modules/ui/enums";
// import { Image } from "ui/image";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    @ViewChild('dragImage', { static: true }) dragImage: ElementRef;
    @ViewChild('container', { static: true }) container: ElementRef;
    itemContainer: GridLayout;
    dragImageItem: Image;
    prevDeltaX: number;
    prevDeltaY: number;
    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        this.itemContainer = <GridLayout>this.container.nativeElement;
        this.dragImageItem = <Image>this.dragImage.nativeElement;
        this.dragImageItem.translateX = 0;
        this.dragImageItem.translateY = 0;
        this.dragImageItem.scaleX = 1;
        this.dragImageItem.scaleY = 1
    }

    onPan(args: PanGestureEventData) {
        //console.log("Pana: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
        if (args.state === 1) // down
        {
          this.prevDeltaX = 0;
          this.prevDeltaY = 0;
        }
        else if (args.state === 2) // panning
        {
          this.dragImageItem.translateX += args.deltaX - this.prevDeltaX;
          this.dragImageItem.translateY += args.deltaY - this.prevDeltaY;

          this.prevDeltaX = args.deltaX;
          this.prevDeltaY = args.deltaY;

          // calculate the conversion from DP to pixels
          let convFactor = +this.dragImageItem.width / this.dragImageItem.getMeasuredWidth();
          let edgeX = (this.itemContainer.getMeasuredWidth() - this.dragImageItem.getMeasuredWidth()) * convFactor;
          let edgeY = (this.itemContainer.getMeasuredHeight() - this.dragImageItem.getMeasuredHeight()) * convFactor;

          // X border
          if (this.dragImageItem.translateX < 0) {
            this.dragImageItem.translateX = 0;
          }
          else if (this.dragImageItem.translateX > edgeX) {
            this.dragImageItem.translateX = edgeX;
          }

          // Y border
          if (this.dragImageItem.translateY < 0) {
            this.dragImageItem.translateY = 0;
          }
          else if (this.dragImageItem.translateY > edgeY) {
            this.dragImageItem.translateY = edgeY;
          }
        }
        else if (args.state === 3) // up
        {
          this.dragImageItem.animate({
            translate: { x: 0, y: 0 },
            duration: 1000,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
          });
        }
      }

}
