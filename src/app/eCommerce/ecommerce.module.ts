import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { GridViewComponent } from './category/grid-view/grid-view.component';
import { ListViewComponent } from './category/list-view/list-view.component';

@NgModule({
    declarations: [
        CategoryComponent,
        GridViewComponent,
        ListViewComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: CategoryComponent }
        ])
    ],
})

export class EcommerceModule { }
