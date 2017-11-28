import { Injectable } from '@angular/core';
import { House } from '../entities/house';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class HouseService {
    private _basePath: string = '/houses';

    private _housesCollection: AngularFirestoreCollection<House>;

    constructor(private _firestore: AngularFirestore) {
        this._housesCollection = _firestore.collection<House>(this._basePath);
    }

    public createHouse(house: House): Promise<any> {
        return this._housesCollection.add(house);
    }

    public getHouses(): Observable<House[]> {
        return this._housesCollection.valueChanges();
    }
}