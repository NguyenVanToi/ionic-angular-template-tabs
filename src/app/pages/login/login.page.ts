import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { VirtualTimeScheduler } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = {} as User;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  goMainPage() {
    console.log('The user info: ', this.user);
    if (this.user.username == 'isoguzay' && this.user.password == '1234') {
      this.navCtrl.navigateForward('tabs', {
        state: {
          user: this.user,
        },
      });
    } else {
      this.inCorrectDataAlert();
    }
  }

  async inCorrectDataAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Wrong Data Error',
      message: 'Please check your username or password!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.user.username = null;
            this.user.password = null;
          },
        },
      ],
    });

    await alert.present();
  }
}
