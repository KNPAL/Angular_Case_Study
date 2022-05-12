import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.scss']
})
export class MyDivComponent implements OnInit, AfterViewInit {

  dynamicId: number;
  @ViewChild('parentDiv', { static: false }) parentDiv: ElementRef;
  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      this.createDiv();
    }
  }
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.dynamicId = 0;
  }

  ngAfterViewInit(): void {
    for (let index = 0; index < 3; index++) {
      this.dynamicId = index;
      this.createDiv();
    }


  }

  onDivClick(a: number): void {
    alert(a + 'th div  clicked');
  }

  createDiv() {
    const elementId = ++this.dynamicId;
    const div = this.renderer.createElement('div');
    const btn = this.renderer.createElement('button');
    this.renderer.addClass(btn, 'btn-primary');
    this.renderer.addClass(div, 'border');
    this.renderer.addClass(div, 'm-2');
    this.renderer.setStyle(div, 'width', '200px');
    this.renderer.setStyle(div, 'height', '200px');
    this.renderer.setAttribute(div, 'id', 'sap-id-' + elementId);
    this.renderer.setAttribute(btn, 'id', '' + elementId);
    this.renderer.appendChild(btn, this.renderer.createText('click'));
    this.renderer.listen(btn, 'click', event => {
      this.onDivClick(event.target.id);
    });
    this.renderer.appendChild(div, btn);
    this.renderer.appendChild(this.parentDiv.nativeElement, div);
  }

}
