import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    private _housesCollection: AngularFirestoreCollection<any>;
    public houses: Observable<any[]>;

    constructor(private _firestore: AngularFirestore) {
        this._housesCollection = _firestore.collection('houses');
        this.houses = this._housesCollection.valueChanges();
    }

    public add(): void {
        this._housesCollection.add({ describe: 'testestests' });
    }
}
