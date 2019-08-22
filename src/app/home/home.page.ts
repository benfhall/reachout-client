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
      name: 'Chemistry',
      url: '/chemistry',
      color: 'secondary',
      period: '2',
    },
    {
      name: 'Honors English II',
      url: '/chemistry',
      color: 'secondary',
      period: '2',
    },
    {
      name: 'AP Statistics',
      url: '/chemistry',
      color: 'secondary',
      period: '2',
    },
  ];

}
