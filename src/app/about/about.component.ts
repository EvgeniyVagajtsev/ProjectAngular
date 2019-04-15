import { Component, OnInit } from '@angular/core';
import * as user from '../user.json';

@Component({
  selector: 'app-about',
  template: `<p>Тест</p>
               <div *ngFor="let item of test">
                <span>{{item.question}}</span>
                 <ul  *ngFor="let answ of item.answers" >
                   <div><li><input class="myCheck" type="checkbox" [value]="answ">{{answ}}</li></div>
               </ul>
             </div>
  <input type="button" (click)="tester()" value="Показать результат"/> 
  <input type="reset" value="Сбросить ответы"/>`,
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  test = user.test;

  tester() {
    const checkboxes = document.getElementsByClassName("myCheck");
    const checkboxesChecked = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        for(let k = 0; k < this.test.length; k++) {
          checkboxesChecked.push(checkboxes[i].value);
          if (checkboxes[i].value == this.test[k].rightAnswer) {
            console.log(checkboxes[i].value + "- Верно");
          } else {
            console.log("Не верно. Правильный ответ " + this.test[k].answers[this.test[k].correctAnswer]);
          }
          return checkboxesChecked;
        }
      }
    }
  }

  constructor() {

  }

  ngOnInit() {
  //   const checkboxes = document.getElementsByClassName("myCheck");
  //   const checkboxesChecked = [];
  //   for (let i = 0; i < checkboxes.length; i++) {
  //     for(let k = 0; k < this.test.length; k++){
  //       if (checkboxes[i].checked) {
  //         checkboxesChecked.push(checkboxes[i].value);
  //         console.log(checkboxes[i].value + " =" + this.test[k].answers[this.test[k].correctAnswer]);
  //       }
  //       return checkboxesChecked;
  //     }
  //   }
  // }
    }
}
