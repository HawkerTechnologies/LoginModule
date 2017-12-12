import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
 
import { LoginPage } from './login/login';

@NgModule({
  imports:      [ 
    FormsModule,
    CommonModule,
    IonicModule.forRoot(LoginPage)
   ],
  declarations: [ 
    LoginPage
  ],
  exports: [
    LoginPage
  ]
})
export class AuthModule { }