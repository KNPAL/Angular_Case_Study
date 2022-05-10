import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayMarksComponent } from './display-marks/display-marks.component';

@NgModule({
    declarations: [
    DisplayMarksComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: DisplayMarksComponent }
        ])
    ],
})

export class TableModule { }
