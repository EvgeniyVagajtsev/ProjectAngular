import { Component, OnInit } from '@angular/core';
import * as user from '../user.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    // let arr = user.question;
    // for(let key in user.question) {
    //   console.log("Вопрос: " + user.question[key]);
    // }
    // console.log(user.right_answers[0]);

  }

  ngOnInit() {
  }

}

