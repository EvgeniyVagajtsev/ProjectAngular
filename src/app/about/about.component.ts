import { Component, OnInit } from '@angular/core';
import * as user from '../user.json';

@Component({
  selector: 'app-about',
  template: `<p>Тест</p>
              <ul>
                <li ng>
                  <p>{{this.questions}}</p>
                  <div class="flex"><input type="checkbox">{{this.answer}}</div>
                </li>
              </ul>
              <input type="button" value="Показать результат"/> 
              <input type="reset" value="Сбросить ответы"/>`,
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  questions: string;
  answer: string[];

  constructor() {
  }

  ngOnInit() {

    const test = [{
      "question": "Какая самая большая по населению страна Европы?",
      "answers": ["Франция", "Великобритания", "Бельгия", "Германия"],
      "rightAnswer": "Великобритания"
    }, {
      "question": "Какая страна находится в центре Европы?",
      "answers": ["Испания", "Франция", "Беларусь", "Польша"],
      "rightAnswer": "Беларусь"
    }, {
      "question": "Сколько жителей живёт в Беларуси",
      "answers": ["2млн людей", "1.3млн людей", "1млн людей", "800тыс людей"],
      "rightAnswer": "1.3млн человек"
    }, {
      "question": "Какую страну называют 'Страна зеркальных зданий' ?",
      "answers": ["Дубаи", "США", "Москва", "Чехия"],
      "rightAnswer": "CША"
    }];

    for (let key of test) {
      console.log(key.question);
      let answer = key.answers.forEach(function (value) {
        console.log(value);
      });
  }

  // this.test.answers.forEach(function (value) {
  //   console.log(value);
  // })
  }
}
