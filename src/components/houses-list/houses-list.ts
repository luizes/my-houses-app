import { Component } from '@angular/core';
import { HouseService } from '../../services/house-service';
import { Observable } from 'rxjs/Observable';
import { House } from '../../entities/house';

@Component({
    selector: 'houses-list',
    templateUrl: 'houses-list.html'
})
export class HousesListComponent {
    public houses: Observable<House[]>;

    constructor(houseService: HouseService) {
        this.houses = houseService.getHouses();
    }
}