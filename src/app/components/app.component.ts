import { Component } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = AppConstants.APP_NAME;

  constructor() { }
}
