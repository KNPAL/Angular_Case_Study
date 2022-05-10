import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimatedBannerComponent } from './animated-banner/animated-banner.component';

@NgModule({
    declarations: [
    AnimatedBannerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: AnimatedBannerComponent }
        ])
    ],
    bootstrap: [AnimatedBannerComponent]
})

export class BannerModule { }
