import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PostPage } from '../modal/post/post.page';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private content: any
  private carousel: any = []
  private loadingCarousel = true

  constructor(
    private nav:NavController,
    public modalController: ModalController,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.getCarouselPage()
  }

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

  // get image from database
  getCarouselPage() {
    this.firebaseService.getContentPage('quem-sou/slide').then(res => {
      this.content = res
    }).then(() => {
      for (let key in this.content) {
        if(this.content[key].status === "active") {
          this.carousel.push(this.content[key])
        }
      }
    }).then(() => {
      this.loadingCarousel = false
    })
  }

}
