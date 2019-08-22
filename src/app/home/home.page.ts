import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public classes = [
    {
      name: 'Honors English II',
      url: '/chemistry',
      img: '../assets/green.svg',
      period: '1',
    },
    {
      name: 'Chemistry',
      url: '/chemistry',
      img: '../assets/blue.svg',
      period: '2',
    },
    {
      name: 'AP Statistics',
      url: '/chemistry',
      img: '../assets/red.svg',
      period: '3',
    },
  ];

}
