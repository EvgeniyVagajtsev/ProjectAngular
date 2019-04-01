import { Component, OnInit } from '@angular/core';
import * as user from '../user.json';

@Component({
  selector: 'app-about',
  template: `<p>Тест</p>
              <ul>
                <li *ngFor="let key of user" >
                  <p>{{key.question}}</p>
                  <input type="checkbox">{{key.answers}}
                </li>
              </ul>
              <input type="button" value="Показать результат"/> 
              <input type="reset" value="Сбросить ответы"/>`,
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  user = [{
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


  constructor() {

    }

  ngOnInit() {

  }
}
