import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  click1 = () => {
      alert('My name is Jonantan');
  }

  click2 = () => {
    alert("My name is Malbera");
  }

  click3 = () => {
    alert("My name is Kish");
  }

  constructor() {

      }

  ngOnInit() {
  }

}
