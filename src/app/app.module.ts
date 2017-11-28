import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseConfig } from '../utils/firebase.config';

import { MyApp } from './app.component';

import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { NewHousePage } from '../pages/new-house/new-house';
import { UpdateHousePage } from '../pages/update-house/update-house';

import { HousesListComponent } from '../components/houses-list/houses-list';
import { HouseFormularyComponent } from '../components/house-fomulary/house-formulary';

import { HouseService } from '../services/house-service';

@NgModule({
    declarations: [
        MyApp,
        WelcomePage,
        HomePage,
        NewHousePage,
        UpdateHousePage,
        HousesListComponent,
        HouseFormularyComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFirestoreModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        WelcomePage,
        HomePage,
        NewHousePage,
        UpdateHousePage,
        HousesListComponent,
        HouseFormularyComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HouseService,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }