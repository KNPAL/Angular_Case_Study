import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-banner',
  templateUrl: './animated-banner.component.html',
  styleUrls: ['./animated-banner.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'aliceblue',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'azure',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal <=> highlighted', animate(800))
    ]),
    trigger('innerText', [
      state('top', style({
        transform: 'translate(0)'
      })),
      state('right', style({
        transform: 'translate(56em)'
      })),
      state('bottom', style({
        transform: 'translate(56rem,6rem)'
      })),
      state('left', style({
        transform: 'translate(0,6rem)'
      })),
      transition('top => right', animate(100)),
      transition('right => bottom', animate(100)),
      transition('bottom => left', animate(100)),
      transition('left => top', animate(100))

    ])
  ]
})
export class AnimatedBannerComponent implements OnInit {

  state = 'normal';
  textState = 'top';
  constructor() {

  }

  ngOnInit() {
    setInterval(() => {
      this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    }, 5000);
    setInterval(() => {
      this.rotateText(this.textState);
    }, 1000);
  }

  rotateText(currentState: string) {
    if (currentState === 'top') {
      this.textState = 'right';
    }
    if (currentState === 'right') {
      this.textState = 'bottom';
    }
    if (currentState === 'bottom') {
      this.textState = 'left';
    }
    if (currentState === 'left') {
      this.textState = 'top';
    }
  }

}
