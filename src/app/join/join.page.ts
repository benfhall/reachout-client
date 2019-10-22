import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {

  constructor() { }

  public newClasses = []

  joinClass(form){
    var formID = form.id;
    var formPWD = form.password;

    // if (j = formID) {
    //   if (formPWD = this.newClasses[j].password) {
    //     localStorage.getItem(JSON.stringify(form.id));
    //     localStorage.getItem(JSON.stringify(form.password));
    //   } else {
    //     console.log("No class found from ID.")
    //   }
    // }
    
  }

  ngOnInit() {
  }

}
