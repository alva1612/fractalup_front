import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../../shared/shared.module';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: MainComponent }],
  },
];

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [LayoutComponent],
})
export class PagesModule {}
