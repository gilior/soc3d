import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {Page} from "ionic-angular/navigation/nav-util";
import {FCM, NotificationData} from "@ionic-native/fcm";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  menuData = [
    {title: 'Our menu', pic: 'assets/imgs/a.jpg', pushPage: 'MenuPage'},
    {title: 'Account', pic: 'assets/imgs/b.jpg', pushPage: 'AccountPage'},
    {title: 'About Us', pic: 'assets/imgs/c.jpg', pushPage: 'AboutPage'},
    {title: 'Locations', pic: 'assets/imgs/d.jpg', pushPage: 'LocationsPage'},
  ]
  logPage: string;
  loggedIn: any;

  constructor(public navCtrl: NavController,
              private angularFireAuth: AngularFireAuth,
              public userServiceProvider: UserServiceProvider,
              private  fcm: FCM) {
    this.initFcm();

  }



  signOff() {
    this.userServiceProvider.logOut();
    this.loggedIn = '';
  }

  myPagePush(page: Page) {
    this.navCtrl.push(page)
      .then(res => {
        if (!res) {
          this.userServiceProvider.displayAlerts('sorry', 'register 1st')
        }
      })

  }

  ngOnInit(): void {
    this.logPage = "LoginPage";
    this.angularFireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = this.userServiceProvider.user = user.email;
      }
    })
  }

  initFcm() {
    this.fcm.onNotification().subscribe((notificationData: NotificationData) => {
      if (notificationData.wasTapped) {
        console.log('notificationData ', notificationData);
        this.userServiceProvider.displayAlerts('notificationData ', notificationData)
      }
      else {
        console.log('notificationData ', notificationData);
        this.userServiceProvider.displayAlerts('notificationData ', notificationData)
      }
    })
  }
}
