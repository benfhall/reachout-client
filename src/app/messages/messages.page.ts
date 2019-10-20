import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth/auth.service';
var messages = require('../classes/messages.json');
var comments = require('../comments.json');

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private  authService: AuthService, private  router:  Router) { }

  public displayMessage = [];
  public displayComments = [];
  public messages = require('../classes/messages.json');
  public comments = require('../comments.json');

  sendMessage(form){
    console.log(form.title);
    this.displayComments.push({
      author:"Ben Hall",
      title: form.title
      });
  }

  ngOnInit() {

    var urlParams = new URLSearchParams(window.location.search);
  
    var messageID = urlParams.get('mid');

    this.displayMessage = messages.filter(({id}) => id == messageID);
    this.displayComments = comments.filter(({superID}) => superID == messageID);
    console.log(this.displayMessage);
    console.log(this.displayComments);

  }
}
