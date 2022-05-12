import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-counterlog',
  templateUrl: './counterlog.component.html',
  styleUrls: ['./counterlog.component.scss']
})
export class CounterlogComponent implements OnInit {

  startCounter: number;
  pauseCounter: number;
  constructor(private timerService: TimerService) {
    this.startCounter = 0;
    this.pauseCounter = 0;
   }

  ngOnInit() {
    this.timerService.startClickCountEmitter.subscribe((data) => {
      this.startCounter = data;
    });

    this.timerService.pauseClickCountEmitter.subscribe((data) => {
      this.pauseCounter = data;
    });
  }

}
