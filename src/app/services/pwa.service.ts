import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  constructor(public swUpdate: SwUpdate) {
    /* swUpdate.available.subscribe(event => { // TODO
      if (askUserToUpdate()) {
        window.location.reload();
      }
    }); */
  }

  runPwaCheck(): void {
    this.swUpdate.available.subscribe((event) => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    this.swUpdate.activated.subscribe((event) => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

    this.swUpdate.available.subscribe((event) => {
      this.swUpdate.activateUpdate().then(() => this.updateApp());
    });
  }

  updateApp(): void {
    document.location.reload();
    console.log('The app is updating right now');
  }
}
