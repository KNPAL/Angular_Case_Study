import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  counterValue;
  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.timmerCountEmitter.subscribe((data) => {
      this.counterValue = data;
    });
  }

}
