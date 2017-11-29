import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { House } from '../../entities/house';

@Component({
    selector: 'house-formulary',
    templateUrl: './house-formulary.html'
})
export class HouseFormularyComponent {
    public formHouse: FormGroup;
    public house: House = new House();

    constructor(formBuilder: FormBuilder) {
        this.formHouse = formBuilder.group({
            description: ['', Validators.compose([Validators.required])],
            address: ['', Validators.compose([Validators.required])],
            number: ['', Validators.compose([Validators.required])],
            neighborhood: ['', Validators.compose([Validators.required])],
            city: ['', Validators.compose([Validators.required])],
            state: ['', Validators.compose([Validators.required])],
            nation: ['Brasil', Validators.compose([Validators.required])]
        });
    }

    public getNewHouse(): Promise<House> {
        return new Promise((resolve, reject) => {
            this.formHouse.valid ? resolve(this.house) : reject('O formulário está invalido, verifique e tente novamente!');
        });
    }
}