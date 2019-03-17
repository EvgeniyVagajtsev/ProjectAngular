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


  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      let questionanswer = document.getElementById("question_" + i);
      console.log(questionanswer.innerHTML = user.test[0].answers[i]);
      for(let k = 0; k < 1; k++){
        let inputquestion = document.getElementById("input_" + k);
        inputquestion.innerHTML = user.test[0].question;
      }
    }
    for (let i = 4; i < 8; i++) {
      let questionanswer = document.getElementById("question_" + i);
      console.log(questionanswer.innerHTML = user.test[1].answers[i]);
      for(let k = 1; k < 2; k++){
        let inputquestion = document.getElementById("input_" + k);
        inputquestion.innerHTML = user.test[1].question;
      }
    }
    for (let i = 8; i < 12; i++) {
      let questionanswer = document.getElementById("question_" + i);
      console.log(questionanswer.innerHTML = user.test[2].answers[i]);
      for(let k = 2; k < 3; k++){
        let inputquestion = document.getElementById("input_" + k);
        inputquestion.innerHTML = user.test[2].question;
      }
    }
    for (let i = 12; i < 16; i++) {
      let questionanswer = document.getElementById("question_" + i);
      console.log(questionanswer.innerHTML = user.test[3].answers[i]);
      for(let k = 3; k < 4; k++){
        let inputquestion = document.getElementById("input_" + k);
        inputquestion.innerHTML = user.test[3].question;
      }
    }


    // for (let i = 2; i < 3; i++) {
    //   let inputquestion = document.getElementById("input_" + i);
    //   inputquestion.innerHTML = user.test[2].question;
    // }
    // for (let i = 3; i < 4; i++) {
    //   let inputquestion = document.getElementById("input_" + i);
    //   inputquestion.innerHTML = user.test[3].question;
    // }
    // for (let i = 0; i < 4; i++) {
    //   let questionanswer = document.getElementById("question_" + i);
    //   questionanswer.innerHTML = user.test[0].answers[i];
    // }
  }
}

