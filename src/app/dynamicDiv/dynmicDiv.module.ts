import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyDivComponent } from './my-div/my-div.component';

@NgModule({
    declarations: [
        MyDivComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: MyDivComponent }
        ])
    ],
})

export class DynmicDivModule { }
