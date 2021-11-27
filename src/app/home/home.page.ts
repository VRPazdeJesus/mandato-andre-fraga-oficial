import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PostPage } from '../modal/post/post.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private nav:NavController,
    public modalController: ModalController
  ) {}

  // controll de inicial slide and speed transiction
  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  // for redirect page
  proximo(values:any) {
    this.nav.navigateForward('/'+values);
  }
  
  // show post modal
  async presentModal() {
    const modal = await this.modalController.create({
      component: PostPage,
      //cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

}
