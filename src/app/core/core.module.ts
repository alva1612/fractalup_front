import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule,PagesModule],
  exports: [PagesModule],
})
export class CoreModule {}
