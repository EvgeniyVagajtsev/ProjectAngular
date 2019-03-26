import { Component, OnInit } from '@angular/core';
import * as user from '../user.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor() {

  }

  check_me(event) {
    let chbox = document.getElementById("check") as HTMLInputElement;
    if (chbox.checked) {
      console.log();
    } else {
      console.log("Не выбран");
    }
  }


  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      let answers1 = document.getElementById("input_" + i);
      answers1.innerHTML = user.test[0].answers[i];

      let answers2 = document.getElementById("inputs_" + i);
      answers2.innerHTML = user.test[1].answers[i];

      let answers3 = document.getElementById("inputx_" + i);
      answers3.innerHTML = user.test[2].answers[i];

      let answers4 = document.getElementById("inputa_" + i);
      answers4.innerHTML = user.test[3].answers[i];

      for (let k = 0; k < 1; k++) {
        let inputquestion = document.getElementById("question_" + k);
        inputquestion.innerHTML = user.test[0].question;
      for ( k = 1; k < 2; k++) {
        let inputquestion = document.getElementById("question_" + k);
         inputquestion.innerHTML = user.test[1].question;
      for ( k = 2; k < 3; k++) {
        let inputquestion = document.getElementById("question_" + k);
          inputquestion.innerHTML = user.test[2].question;
      for ( k = 3; k < 4; k++) {
        let inputquestion = document.getElementById("question_" + k);
          inputquestion.innerHTML = user.test[3].question;
         }
        }
       }
      }
    }
  }
}
