import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
// import { clearTimeout } from 'timers';

@Component({
  selector: 'app-input-timer-data',
  templateUrl: './input-timer-data.component.html',
  styleUrls: ['./input-timer-data.component.scss']
})
export class InputTimerDataComponent implements OnInit {

  timmerCount: any;
  startClickCount: number;
  pauseClickCount: number;
  @Output() started = new EventEmitter<number>();
  @Output() paused = new EventEmitter<number>();
  @ViewChild('pauseLog', { static: false }) pauseLog: ElementRef;
  setTimeOutEvent: any;
  constructor(private renderer: Renderer2) {
    this.startClickCount = 0;
    this.pauseClickCount = 0;
  }

  ngOnInit() {
  }

  onClick(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      console.log(e, this.timmerCount);
    }
  }

  onStart() {
    this.started.emit(++this.startClickCount);
    do {
      this.setTimeOutEvent = setInterval(() => {
        if (this.timmerCount === 0) {
          clearInterval(this.setTimeOutEvent);
        } else {
          this.timmerCount--;
        }

      }, 1000);
    } while (this.timmerCount === 0);

  }
  onPause() {
    this.addPauseLog();
    this.paused.emit(++this.pauseClickCount);
    clearInterval(this.setTimeOutEvent);
  }
  onReset() {
    this.timmerCount = '';
  }

  addPauseLog() {
    const div = this.renderer.createElement('div');
    const log = this.renderer.createText('Paused at' + this.timmerCount);
    this.renderer.appendChild(div, log);
    this.renderer.appendChild(this.pauseLog.nativeElement, div);
  }

}
