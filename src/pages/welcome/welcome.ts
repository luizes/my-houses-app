import { Component } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-welcome',
    templateUrl: './welcome.html'
})
export class WelcomePage {
    public homePage: any = HomePage;
}
