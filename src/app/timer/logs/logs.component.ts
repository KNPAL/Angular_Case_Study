import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit, OnChanges {

  @Input() startLog: string;
  @Input() pauseLog: string;
  @ViewChild('dom', { static: false }) dom: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (!!this.startLog) {
      this.addLogToDom(this.startLog);
    }
    if (!!this.pauseLog) {
      this.addLogToDom(this.pauseLog);
    }
  }

  addLogToDom(logData: string) {
    const div = this.renderer.createElement('div');
    const log = this.renderer.createText(logData);
    this.renderer.appendChild(div, log);
    this.renderer.appendChild(this.dom.nativeElement, div);
  }


}
