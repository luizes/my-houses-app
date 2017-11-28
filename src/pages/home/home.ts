import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ModalController } from 'ionic-angular';
import { NewHousePage } from '../new-house/new-house';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(private _modalCtrl: ModalController) { }

    public add(): void {
        this._modalCtrl.create(NewHousePage).present();
    }
}
