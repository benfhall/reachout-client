import { Component, OnInit } from '@angular/core';
var messages = require('../classes/messages.json');
var classes = require('../home/classes.json');
var comments = require('../comments.json');

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor() { }

  public displayMessage = [];
  public displayComments = [];
  public messages = require('../classes/messages.json');
  public comments = require('../comments.json');

  ngOnInit() {

    var urlParams = new URLSearchParams(window.location.search);
  
    var messageID = urlParams.get('mid');

    this.displayMessage = messages.filter(({id}) => id == messageID);
    this.displayComments = comments.filter(({superID}) => superID == messageID);
    console.log(this.displayMessage);
    console.log(this.displayComments);

  }

}
