import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheetController: ActionSheetController, public alertController: AlertController) {}

  async classNameChange() {
    const alert = await this.alertController.create({
      header: 'Change Class Name',
      inputs: [
        {
          name: 'newClassName',
          type: 'text',
          label: 'New Class Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async changeClassColor() {
    const alert = await this.alertController.create({
      header: 'Change Color',
      buttons: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Cancel']
    });

    await alert.present();
  }
  
  async confirmClassDeletion() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to leave this class?',
      buttons: ['Cancel', 'Confirm']
    });

    await alert.present();
  }

  async classSettingsActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Settings',
      buttons: [{
        text: 'Leave',
        role: 'destructive',
        icon: 'exit',
        handler: () => {
          console.log('Left Class');
          this.confirmClassDeletion();
        }
      }, {
        text: 'Change Color',
        icon: 'brush',
        handler: () => {
          console.log('Changing Colors');
          this.changeClassColor();
        }
      }, {
        text: 'Change Name',
        icon: 'create',
        handler: () => {
          console.log('Changing Name');
          this.classNameChange();
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  public classes = [
    {
      name: 'AP Composition',
      url: '/ap-composition',
      color: 'green',
      teacher: 'Ms. Townley',
      period: '1',
    },
    {
      name: 'AP Chemistry',
      url: '/ap_chemistry',
      color: 'blue',
      teacher: 'Mr. Clark',
      period: '2',
    },
    {
      name: 'AP Statistics',
      url: '/ap_statistics',
      color: 'red',
      teacher: 'Mrs. Gregor',
      period: '3',
    },
    {
      name: 'American Government',
      url: '/american_gov',
      color: 'purple',
      teacher: 'Mr. Justice',
      period: '4',
    },
    {
      name: 'AP Computer Science',
      url: '/ap_compsci',
      color: 'orange',
      teacher: 'Mr. Pacer',
      period: '5',
    },
  ];

}
