import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contact: Contact = {} as Contact;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async showMessage() {
    const alert = await this.alertCtrl.create({
      header: 'Contact Message Detail',
      message:
        'Email : ' + this.contact.email + ' Message : ' + this.contact.content,
      buttons: [
        {
          text: 'Ok',
        },
      ],
    });

    await alert.present();
  }

  goBack() {
    this.navCtrl.back();
  }
}
