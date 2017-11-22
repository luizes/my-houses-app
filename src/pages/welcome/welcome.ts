import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-welcome',
    templateUrl: './welcome.html'
})
export class WelcomePage {
    public homePage: any = HomePage;
}
