import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisplayComponent } from './display/display.component';
import { InputTimerDataComponent } from './input-timer-data/input-timer-data.component';
import { LogsComponent } from './logs/logs.component';
import { CounterlogComponent } from './counterlog/counterlog.component';
import { RouterModule } from '@angular/router';
import { TimmerAppComponent } from './timmer-app/timmer-app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    DisplayComponent,
    InputTimerDataComponent,
    LogsComponent,
    CounterlogComponent,
    TimmerAppComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: TimmerAppComponent }
        ])
    ],
})

export class TimerModule { }
