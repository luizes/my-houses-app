import { Component } from '@angular/core';
import { HouseService } from '../../services/house-service';
import { Observable } from 'rxjs/Observable';
import { House } from '../../entities/house';
import { ModalController } from 'ionic-angular';
import { UpdateHousePage } from '../../pages/update-house/update-house';

@Component({
    selector: 'houses-list',
    templateUrl: 'houses-list.html'
})
export class HousesListComponent {
    public houses: Observable<House[]>;

    constructor(
        houseService: HouseService,
        private _modalCtrl: ModalController
    ) {
        this.houses = houseService.getHouses();
    }

    public edit(house: House): void {
        this._modalCtrl.create(UpdateHousePage, { house: house }).present();
    }
}