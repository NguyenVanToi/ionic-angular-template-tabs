import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(public toastController: ToastController) {}

  async presentToast(message: string, type?: string, duration?: number) {
    type = type ? type : 'primary';
    duration = duration ? duration : 2000;
    const toast = await this.toastController.create({
      message,
      duration,
      color: type,
    });
    toast.present();
  }

  async present(
    message: string,
    type?: string,
    position?: 'top' | 'bottom' | 'middle'
  ) {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message,
      color: type ? type : 'primary',
      icon: 'information-circle',
      position,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
