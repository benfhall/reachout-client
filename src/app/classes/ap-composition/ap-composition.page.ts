import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ap-composition',
  templateUrl: './ap-composition.page.html',
  styleUrls: ['./ap-composition.page.scss'],
})
export class ApCompositionPage implements OnInit {

  constructor() { }

  public messages = [
    {
      title: 'What pages did we have to read for homework?',
      author: 'John Smith',
      date: 'Nov. 1st, 2019',
    },
    {
      title: 'How long did your essay take to write?',
      author: 'Ben Hall',
      date: 'Oct. 28th, 2019',
    },
    {
      title: 'What pages was the essay prompt reffering to?',
      author: 'Cian Weekly',
      date: 'Oct. 27th, 2019',
    },
    {
      title: 'What pages did we have to read for homework?',
      author: 'John Smith',
      date: 'Nov. 1st, 2019',
    },
    {
      title: 'How long did your essay take to write?',
      author: 'Ben Hall',
      date: 'Oct. 28th, 2019',
    },
    {
      title: 'What pages was the essay prompt reffering to?',
      author: 'Cian Weekly',
      date: 'Oct. 27th, 2019',
    },
    {
      title: 'What pages did we have to read for homework?',
      author: 'John Smith',
      date: 'Nov. 1st, 2019',
    },
    {
      title: 'How long did your essay take to write?',
      author: 'Ben Hall',
      date: 'Oct. 28th, 2019',
    },
    {
      title: 'What pages was the essay prompt reffering to?',
      author: 'Cian Weekly',
      date: 'Oct. 27th, 2019',
    },
  ];

  ngOnInit() {
  }

}
