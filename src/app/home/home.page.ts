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
      name: 'AP Composition',
      url: '/ap-composition',
      color: 'green',
      period: '1',
    },
    {
      name: 'AP Chemistry',
      url: '/ap_chemistry',
      color: 'blue',
      period: '2',
    },
    {
      name: 'AP Statistics',
      url: '/ap_statistics',
      color: 'red',
      period: '3',
    },
    {
      name: 'American Government',
      url: '/american_gov',
      color: 'purple',
      period: '4',
    },
    {
      name: 'AP Computer Science',
      url: '/ap_compsci',
      color: 'orange',
      period: '5',
    },
  ];

}
