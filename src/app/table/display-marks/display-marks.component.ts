import { Component, OnInit } from '@angular/core';
import { STUDENTMARKS } from '../marks';
import { Marks } from '../marks.model';

@Component({
  selector: 'app-display-marks',
  templateUrl: './display-marks.component.html',
  styleUrls: ['./display-marks.component.scss']
})
export class DisplayMarksComponent implements OnInit {

  markts: Marks[];
  header: any[];
  countTrackerArray: number[] = [0, 0, 0, 0, 0, 0];
  constructor() {
    this.markts = JSON.parse(JSON.stringify(STUDENTMARKS));
    this.header = Object.keys(this.markts[0]);
  }

  ngOnInit() {
  }

  sorting(propertyName: string, propertyType: string, isAssending: boolean) {
    this.markts = this.markts.sort((a, b) => {
      let nameA: any;
      let nameB: any;
      if (propertyType === 'str') {
        nameA = a[propertyName].toUpperCase();
        nameB = b[propertyName].toUpperCase();
      } else {
        nameA = a[propertyName];
        nameB = b[propertyName];
      }
      if (nameA < nameB) {
        if (isAssending) {
          return -1;
        } else {
          return 1;
        }

      }
      if (nameA > nameB) {
        if (isAssending) {
          return 1;
        } else {
          return -1;
        }
      }
      return 0;
    });
  }

  reset() {
    this.markts = STUDENTMARKS;
  }

  headerClick(i: number) {
    if (this.countTrackerArray[i] < 2) {
      this.countTrackerArray[i]++;
    } else {
      this.countTrackerArray[i] = 0;
    }
    this.sortTable(this.countTrackerArray[i], i);
  }

  sortTable(order: number, index: number) {
    const properyType = (index === 0 || index === 2) ? 'str' : 'num';
    switch (order) {
      case 1:
        this.sorting(this.header[index], properyType, true);
        break;
      case 2:
        this.sorting(this.header[index], properyType, false);
        break;
      default:
        this.reset();
        break;
    }

  }
}
