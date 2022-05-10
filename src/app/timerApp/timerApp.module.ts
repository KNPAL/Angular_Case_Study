import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CounterlogComponent } from './counterlog/counterlog.component';
import { DisplayComponent } from './display/display.component';
import { InputTimerDataComponent } from './input-timer-data/input-timer-data.component';
import { LogsComponent } from './logs/logs.component';
import { TimerAppComponent } from './timerApp.component';

@NgModule({
    declarations: [
        TimerAppComponent,
        CounterlogComponent,
        DisplayComponent,
        InputTimerDataComponent,
        LogsComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: TimerAppComponent }
        ])
    ],
})

export class TimerAppModule { }
