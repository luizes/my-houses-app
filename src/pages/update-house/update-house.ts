import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house-service';
import { ToastController, AlertController } from 'ionic-angular';

@Component({
    selector: 'update-house',
    templateUrl: './update-house.html'
})
export class UpdateHousePage implements OnInit {
    constructor(
        private _houseService: HouseService,
        private _toastCtrl: ToastController,
        private _alertCtrl: AlertController
    ) { }

    ngOnInit() { }

    public updateHouse(): void {

    }

    private _alertSuccess(): void {
        this._toastCtrl.create({
            message: 'Casa atualizada com sucesso!',
            duration: 3000
        }).present();
    }

    private _alertError(): void {
        this._alertCtrl.create({
            title: 'Ops...',
            subTitle: 'Não foi póssivel atualizar a casa. Tente novamente!',
            buttons: ['Ok']
        }).present();
    }
}