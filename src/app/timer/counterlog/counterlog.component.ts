import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterlog',
  templateUrl: './counterlog.component.html',
  styleUrls: ['./counterlog.component.scss']
})
export class CounterlogComponent implements OnInit {

  @Input() startCounter: number;
  @Input() pauseCounter: number;
  constructor() { }

  ngOnInit() {
  }

}
