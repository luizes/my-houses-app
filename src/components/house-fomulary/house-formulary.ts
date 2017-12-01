import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { House } from '../../entities/house';
import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
    selector: 'house-formulary',
    templateUrl: './house-formulary.html'
})
export class HouseFormularyComponent {
    @Output('confirmHouse') confirmHouseEvent: EventEmitter<House> = new EventEmitter();

    public segment: string = 'data';

    public formHouse: FormGroup;
    public house: House = new House();

    constructor(
        formBuilder: FormBuilder,
        private _toastCtrl: ToastController,
        private _camera: Camera
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

    public newPhoto(): void {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this._camera.DestinationType.DATA_URL,
            encodingType: this._camera.EncodingType.JPEG,
            mediaType: this._camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            cameraDirection: 1,
            correctOrientation: true
        };

        this._camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.house.images.push(base64Image);
        }, (err) => {
            console.error(err);
        });
    }

    public get totalImages(): string {
        return `${this.house.images.length} imagens.`;
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