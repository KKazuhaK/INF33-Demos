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
    const perm = await LocalNotifications.requestPermissions();
    if(perm.display == 'granted')
    {
      const notif = await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Daily Reminder',
            body: 'Time to do the thing!',
            id: 1,
            schedule: {at: new Date(Date.now())}
          }
        ]
      });
      this.finishedReminder.set(true);
    }
  }

  async getLocation () {
    const position = await Geolocation.getCurrentPosition();
    this.finishedLocation.set(true);
    this.latCoord.set(position.coords.latitude);
    this.longCoord.set(position.coords.longitude);
  }

  async shareStuff () {
    // try/catch because error is thrown if user cancells sharing operation
    try {
      await Share.share({
        title: 'Share coordinates',
        text: `Just in case you wanted to know, these are my current coordinates. Perhaps this is an emergency location sharing app idk. My current coordinates are ${this.latCoord()}, ${this.longCoord()}`,
        dialogTitle: 'Share my coordinates',
      });
    } catch (e) {
      console.log(e);
    }
  }
}
