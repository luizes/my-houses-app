import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { House } from '../../entities/house';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'house-formulary',
    templateUrl: './house-formulary.html'
})
export class HouseFormularyComponent {
    @Output('confirmHouse') confirmHouseEvent: EventEmitter<House> = new EventEmitter();

    public formHouse: FormGroup;
    public house: House = new House();

    constructor(
        formBuilder: FormBuilder,
        private _toastCtrl: ToastController
    ) {
        this.formHouse = formBuilder.group({
            description: ['', Validators.compose([Validators.required])],
            address: ['', Validators.compose([Validators.required])],
            number: ['', Validators.compose([Validators.required])],
            neighborhood: ['', Validators.compose([Validators.required])],
            city: ['', Validators.compose([Validators.required])],
            state: ['', Validators.compose([Validators.required])]
        });
    }

    public confirmHouse(): void {
        if (this.formHouse.valid) {
            this.confirmHouseEvent.emit(this.house);

            return;
        }

        this._alertInvalidFormulary();
    }

    private _alertInvalidFormulary(): void {
        this._toastCtrl.create({ message: 'O formulário está inválido. Verifique e tente novamente!', duration: 3000 }).present();
    }
}