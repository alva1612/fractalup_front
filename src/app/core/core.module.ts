import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { PagesModule } from './pages/pages.module';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), PagesModule],
  exports: [PagesModule],
})
export class CoreModule {}
