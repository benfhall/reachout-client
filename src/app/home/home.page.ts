import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
var classes = require('./classes.json');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public actionSheetController: ActionSheetController, public alertController: AlertController) {}

  public classes = require('./classes.json');

  async updateClasses() {
    for (var i=0; i<classes.length; i++)
    {
      var classID = classes[i].id;
      var classStorage = localStorage.getItem(classID);
      classStorage = JSON.parse(classStorage);
      var color = classStorage['color'];
      var name = classStorage['name'];
      classes[i].name = name;
      classes[i].color = color;
  
      console.log("Updating Classes...");
    }
  };

  async classNameChange(classID: any) {
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
          handler: data => {
            console.log('Confirm Ok');

            console.log(JSON.stringify(data));
            console.log(data.newClassName);

            for (var i=0; i<classes.length; i++)
            {
              if (classes[i].id == classID) {

                var classStorage = localStorage.getItem(classID);
                classStorage = classStorage ? JSON.parse(classStorage) : {};
                classStorage['name'] = data.newClassName;
                localStorage.setItem(classID, JSON.stringify(classStorage));
                classes[i].name = data.newClassName;
                console.log("Changing class (ID:" + classID + ") name to " + data.newClassName);
                break;
              }
            }
          }
          }
      ]
    });

    await alert.present();
  }

  async changeClassColor(classID: any) {
    const alert = await this.alertController.create({
      header: 'Change Class Color',
      inputs: [
          {
            name: 'red',
            type: 'radio',
            label: 'Red',
            value: 'red'
          },
          {
            name: 'orange',
            type: 'radio',
            label: 'Orange',
            value: 'orange'
          },
          {
            name: 'green',
            type: 'radio',
            label: 'Green',
            value: 'green'
          },
          {
            name: 'blue',
            type: 'radio',
            label: 'Blue',
            value: 'blue'
          },
          {
            name: 'purple',
            type: 'radio',
            label: 'Purple',
            value: 'purple'
          },
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
          handler: (data:string) => {
            console.log('Confirm color change.');

            for (var i=0; i<classes.length; i++)
            {
              if (classes[i].id == classID) {

                var classStorage = localStorage.getItem(classID);
                classStorage = classStorage ? JSON.parse(classStorage) : {};
                classStorage['color'] = data;
                localStorage.setItem(classID, JSON.stringify(classStorage));
                classes[i].color = data;
                console.log("Changing class (ID:" + classID + ") color to " + data);
                break;
              }
            }
          }
          }
      ]
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

  async classSettingsActionSheet(classID: any) {
    const actionSheet = await this.actionSheetController.create({

      header: 'Settings',
      buttons: [{
        text: 'Leave',
        role: 'destructive',
        icon: 'exit',
        handler: () => {
          console.log('Selected Leave');
          this.confirmClassDeletion();
        }
      }, {
        text: 'Change Color',
        icon: 'brush',
        handler: () => {
          console.log('Changing Colors');
          this.changeClassColor(classID);
        }
      }, {
        text: 'Change Name',
        icon: 'create',
        handler: () => {
          console.log('Changing Name');
          this.classNameChange(classID);
          console.log(classID);
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
  
  ngOnInit() {
    this.updateClasses();
  }
}