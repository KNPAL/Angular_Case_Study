import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timmer-app',
  templateUrl: './timmer-app.component.html',
  styleUrls: ['./timmer-app.component.scss']
})
export class TimmerAppComponent implements OnInit {

  sCount: number;
  pCount: number;
  slog: string;
  plog: string;
  constructor() {
    this.sCount = 0;
    this.pCount = 0;
  }

  ngOnInit() {
  }

  updateStartCounter($event) {
    this.slog = 'Started at' + new Date();
    this.sCount = $event;
  }
  updatePausedCounter($event) {
    this.plog = 'Pased at' + new Date();
    this.pCount = $event;
  }

}
