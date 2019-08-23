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
      img: '../assets/green.svg',
      period: '1',
    },
    {
      name: 'AP Chemistry',
      url: '/ap_chemistry',
      img: '../assets/blue.svg',
      period: '2',
    },
    {
      name: 'AP Statistics',
      url: '/ap_statistics',
      img: '../assets/red.svg',
      period: '3',
    },
    {
      name: 'American Government',
      url: '/american_gov',
      img: '../assets/purple.svg',
      period: '4',
    },
    {
      name: 'AP Computer Science',
      url: '/ap_compsci',
      img: '../assets/orange.svg',
      period: '5',
    },
  ];

}
