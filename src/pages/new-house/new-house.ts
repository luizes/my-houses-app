import { Component } from '@angular/core';
import { House } from '../../entities/house';
import { HouseService } from '../../services/house-service';
import { ToastController, AlertController, NavController, LoadingController } from 'ionic-angular';

@Component({
    selector: 'new-house',
    templateUrl: './new-house.html'
})
export class NewHousePage {
    constructor(
        private _houseService: HouseService,
        private _toastCtrl: ToastController,
        private _alertCtrl: AlertController,
        private _navCtrl: NavController,
        private _loadCtrl: LoadingController
    ) { }

    public createHouse(house: House): void {
        let load = this._loadCtrl.create({ content: 'Adicionando uma nova casa...' });
        load.present().then(() => {
            this._houseService.createHouse(house)
                .then(() => {
                    load.dismiss().then(() => {
                        this._navCtrl.pop().then(() => {
                            this._alertSuccess();
                        });
                    });
                })
                .catch(error => {
                    load.dismiss();
                    console.error(error);
                    this._alertError();
                });
        });
    }

    private _alertSuccess(): void {
        this._toastCtrl.create({
            message: 'Casa adicionada com sucesso!',
            duration: 3000
        }).present();
    }

    private _alertError(): void {
        this._alertCtrl.create({
            title: 'Ops...',
            subTitle: 'Não foi póssivel adicionar a casa. Tente novamente!',
            buttons: ['Ok']
        }).present();
    }
}