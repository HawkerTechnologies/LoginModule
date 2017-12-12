import { Component } from '@angular/core';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  text: string;

  constructor() {
    console.log('Hello LoginPage Component');
    this.text = 'Hello World';
  }

}
