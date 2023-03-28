import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserButtonComponent } from './components/user-button/user-button.component';

@NgModule({
  declarations: [UserButtonComponent],
  imports: [RouterModule, CommonModule, HttpClientModule],
  exports: [UserButtonComponent],
})
export class AuthModule {}
