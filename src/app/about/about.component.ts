import { Component, OnInit } from '@angular/core';
import * as user from '../user.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id1 = user.id1;
  id2 = user.id2;
  id3 = user.id3;
  id4 = user.id4;

  id5 = user.id5;
  id6 = user.id6;
  id7 = user.id7;
  id8 = user.id8;

  id9 = user.id9;
  id10 = user.id10;
  id11 = user.id11;
  id12 = user.id12;

  id13 = user.id13;
  id14 = user.id14;

  id15 = user.id15;
  id16 = user.id16;

  question1 = user.question1;
  question2 = user.question2;
  question3 = user.question3;
  question4 = user.question4;
  question5 = user.question5;
  constructor() {

  }

  ngOnInit() {

  }

}

