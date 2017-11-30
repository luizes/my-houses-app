import { Injectable } from '@angular/core';
import { House } from '../entities/house';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class HouseService {
    private _basePath: string = '/houses';

    private _housesCollection: AngularFirestoreCollection<any>;

    constructor(private _firestore: AngularFirestore) {
        this._housesCollection = _firestore.collection<any>(this._basePath);
    }

    public createHouse(house: House): Promise<any> {
        let houseAdding = {
            address: house.address,
            city: house.city,
            description: house.description,
            images: house.images,
            neighborhood: house.neighborhood,
            number: house.number,
            reforms: house.reforms,
            state: house.state
        }
        return this._housesCollection.add(houseAdding);
    }

    public getHouses(): Observable<House[]> {
        return this._housesCollection.valueChanges();
    }

    public updateHouse(house: House): Promise<any> {
        return this._housesCollection.doc(house.$key).update(house);
    }

    public deleteHouse(house: House): Promise<any> {
        return this._housesCollection.doc(house.$key).delete();
    }
}