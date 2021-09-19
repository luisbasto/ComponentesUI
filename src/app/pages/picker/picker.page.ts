import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage implements OnInit {

  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {
  }

  async showBasicPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [{
        name: "Mobile Frameworks",
        options: [
          { text: 'Flutter', value: 'flutter' },
          { text: 'Ionic', value: 'ionic' },
          { text: 'Xamarin', value: 'xamarin' }
        ]
      }
      ],
      buttons: [
        {
          text: "Cancel", role: "cancel", handler: (value) => {
            console.log('Click cancel bottom');
          }
        }, {
          text: 'Confirm', handler: (value) => {
            console.log('Value:', value);
          }
        }
      ]
    });
    await picker.present();
  }

  async showAdvancedPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [{
        name: "Mobile Frameworks", options: [
          { text: 'Flutter', value: 'flutter' },
          { text: 'Ionic', value: 'ionic' },
          { text: 'Xamarin', value: 'xamarin' },
        ]
      },
      {
        name: "Web Frameworks", options: [
          { text: 'Angular', value: 'angular' },
          { text: 'React', value: 'react' },
          { text: 'Vue', value: 'view' },
        ]
      },
      ],
      buttons: [
        {
          text: "Cancel", role: "cancel", handler: (value) => {
            console.log('Click cancel bottom');
          }
        }, {
          text: 'Confirm', handler: (value) => {
            console.log('Value:', value);
          }
        }
      ]
    });
    await picker.present();
  }

}
