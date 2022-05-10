import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  @ViewChild('mainLogPanel', { static: false }) mainLogPanel: ElementRef;
  constructor(private renderer: Renderer2, private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.startClickCountEmitter.subscribe(() => {
      this.addPauseLog( 'Started at' + new Date());
    });

    this.timerService.pauseClickCountEmitter.subscribe(() => {
      this.addPauseLog('Pased at' + new Date());
    });
  }

  addPauseLog(printedLog: string) {
    const logdiv = this.renderer.createElement('div');
    const text = this.renderer.createText(printedLog);
    this.renderer.appendChild(logdiv, text);
    this.renderer.appendChild(this.mainLogPanel.nativeElement, logdiv);
  }

}
