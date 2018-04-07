import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {UserServiceProvider} from '../providers/user-service/user-service';
import {IonicStorageModule} from "@ionic/storage";
import {RewardServiceProvider} from '../providers/reward-service/reward-service';
import {RewardModalPageModule} from "../pages/reward-modal/reward-modal.module";
import {FCM} from "@ionic-native/fcm";


export const firebaseConfig = {
  apiKey: "AIzaSyAcQD5tdeESIhU6SMkVZM6ljGXQ7ICpcZQ",
  authDomain: "soc3d-4809d.firebaseapp.com",
  databaseURL: "https://soc3d-4809d.firebaseio.com",
  storageBucket: "soc3d-4809d.appspot.com",
  messagingSenderId: "181757611932"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    RewardModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    RewardServiceProvider,
    FCM
  ]
})
export class AppModule {
}
