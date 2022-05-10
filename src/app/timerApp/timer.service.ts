import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timmerCountEmitter = new EventEmitter<number>();
  startClickCountEmitter = new EventEmitter<number>();
  pauseClickCountEmitter = new EventEmitter<number>();


  constructor() { }
}
