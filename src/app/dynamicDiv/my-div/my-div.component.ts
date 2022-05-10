import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.scss']
})
export class MyDivComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDivClick(a: number): void {
    alert(a + 'th div  clicked');
  }

}
