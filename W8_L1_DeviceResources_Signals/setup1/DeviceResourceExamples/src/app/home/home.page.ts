import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton } from '@ionic/angular';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Geolocation } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton],
})
export class HomePage {
  finishedReminder = signal<boolean>(false);
  finishedLocation = signal<boolean>(false);

  latCoord = signal<number>(0);
  longCoord = signal<number>(0);

  constructor() {}

  async scheduleReminder () {
    console.log("clicked schedule selfie");
    // TODO: request permissions, schedule reminder, update finishedReminder
  }

  async getLocation () {
    // TODO: get current location, update latCoord and longCoord, update finishedLocation
  }

  async shareStuff () {
    // TODO: share current coordinates
    // TODO: try/catch because error is thrown if user cancells sharing operation
  }
}
