import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {User} from "../user";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: User;

  // check_me(event) {
  //   let check1 = document.getElementsByName('check1');
  //   let check2 = document.getElementsByName('check2');
  //   let check3 = document.getElementsByName('check3');
  //   let check4 = document.getElementsByName('check4');
  //   let check5 = document.getElementsByName('check5');
  //     if (check1[1].checked) {
  //         console.log("Верно");
  //     } else {
  //       console.log("Не верно");
  //     }
  //   if (check2[0].checked) {
  //     console.log("Верно");
  //   } else {
  //     console.log("Не верно");
  //   }
  //   if (check3[1].checked) {
  //     console.log("Верно");
  //   } else {
  //     console.log("Не верно");
  //   }
  //   if (check4[0].checked) {
  //     console.log("Верно");
  //   } else {
  //     console.log("Не верно");
  //   }
  //   if (check5[0].checked) {
  //     console.log("Верно");
  //   } else {
  //     console.log("Не верно");
  //   }
  //   }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('user.json').subscribe((data:User) => this.user=data);
  }

}
