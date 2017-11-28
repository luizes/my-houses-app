import { Component } from '@angular/core';
import { HouseService } from '../../services/house-service';
import { Observable } from 'rxjs/Observable';
import { House } from '../../entities/house';
import { ModalController, AlertController } from 'ionic-angular';
import { UpdateHousePage } from '../../pages/update-house/update-house';

@Component({
    selector: 'houses-list',
    templateUrl: 'houses-list.html'
})
export class HousesListComponent {
    public houses: Observable<House[]>;

    constructor(
        private _houseService: HouseService,
        private _modalCtrl: ModalController,
        private _alertCtrl: AlertController
    ) {
        this.houses = _houseService.getHouses();
    }

    public delete(house: House): void {
        this._alertCtrl.create({
            title: 'Certeza que vai excluir essa casa?',
            subTitle: `${house.description}`,
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Sim, certeza!',
                handler: () => {
                    this._houseService.deleteHouse(house);
                }
            }]
        }).present();
    }

    public edit(house: House): void {
        this._modalCtrl.create(UpdateHousePage, { house: house }).present();
    }
}