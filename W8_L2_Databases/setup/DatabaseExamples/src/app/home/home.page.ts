import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../services/storage';

// you'll need to import the Angular Forms model to use [(ngModel)] in Ion form components
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonPicker, IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonPickerColumn, IonPickerColumnOption],
})
export class HomePage {
  // Q for students: why is namedSaved a signal, but not nameKey?
  namedSaved = signal<boolean>(false);
  nameKey:string = "name";
  name:string = "";

  pickerValue:string = "Spring";
  decorativeText:string = "";

  springText:string = '\u{1F326}\u{1F490}\u{1F430}';
  summerText:string = '\u{1F33B}\u{1F31E}\u{1F30A}';
  fallText:string = '\u{1F342}\u{1F341}\u{1F383}';
  winterText:string = '\u{2744}\u{1F384}\u{26C4}';

  seasonKey:string = "season";

  constructor(private storage:StorageService) {
    // TODO: load preferences data
    

    this.init();
  }

  async init () {
    // TODO: load IndexedDB data
    
  }

  async saveName() {
    // TODO: save name to preferences
    
  }

  async clearData() {
    // TODO: clear preferences data
    

    // TODO: clear IndexedDB data
    
  }

  onIonChange(event: CustomEvent) {
    // TODO:
    // set picker value
    // set decorative text
    // save to IndexedDB

  }

  setDecorativeText () {
    switch(this.pickerValue)
    {
      case "Spring": this.decorativeText = this.springText; break;
      case "Summer": this.decorativeText = this.summerText; break;
      case "Fall": this.decorativeText = this.fallText; break;
      case "Winter": this.decorativeText = this.winterText; break;
    }
  }
}
