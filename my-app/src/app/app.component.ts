import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment'

import * as firebase from 'firebase/app'; //The core firebase client

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp(environment);
    firebase.analytics();
  }
  title = 'my-app';
}
