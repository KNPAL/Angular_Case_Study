import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-input-timer-data',
  templateUrl: './input-timer-data.component.html',
  styleUrls: ['./input-timer-data.component.scss']
})
export class InputTimerDataComponent implements OnInit {

  startClickCount: number;
  pauseClickCount: number;
  timmerCount;
  setTimeOutEvent: any;
  @ViewChild('logPanel', { static: false }) logPanel: ElementRef;
  constructor(private timerService: TimerService, private renderer: Renderer2) {
    this.startClickCount = 0;
    this.pauseClickCount = 0;
  }

  ngOnInit() {
  }

  onClick(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      this.timerService.timmerCountEmitter.emit(this.timmerCount);
    }
  }

  onStart() {
    this.timerService.startClickCountEmitter.emit(++this.startClickCount);
    do {
      this.setTimeOutEvent = setInterval(() => {
        if (this.timmerCount === 0) {
          clearInterval(this.setTimeOutEvent);
        } else {
          this.timmerCount--;
          this.timerService.timmerCountEmitter.emit(this.timmerCount);
        }

      }, 1000);
    } while (this.timmerCount === 0);

  }
  onPause() {
    this.addPauseLog();
    this.timerService.pauseClickCountEmitter.emit(++this.pauseClickCount);
    clearInterval(this.setTimeOutEvent);
  }
  onReset() {
    this.timmerCount = '';
    this.timerService.timmerCountEmitter.emit(this.timmerCount);
  }

  addPauseLog() {
    const logdiv = this.renderer.createElement('div');
    const text = this.renderer.createText('Paused at' + this.timmerCount);
    this.renderer.appendChild(logdiv, text);
    this.renderer.appendChild(this.logPanel.nativeElement, logdiv);
  }


}
