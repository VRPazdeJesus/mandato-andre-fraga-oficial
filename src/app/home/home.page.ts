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
  private contentPost: any
  private carousel: any = []
  private posts: any = []
  private loadingCarousel = true

  constructor(
    private nav:NavController,
    public modalController: ModalController,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.getCarouselImage()
    this.getPost()
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
  async presentModal(post: any) {
    const modal = await this.modalController.create({
      component: PostPage,
      //cssClass: 'my-custom-class',
      componentProps: {
        'post': post
      }
    });
    return await modal.present();
  }

  // get image from database
  getCarouselImage() {
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

  // get post from database
  getPost() {
    this.firebaseService.getContentPage('quem-sou/blog').then(res => {
      this.contentPost = res
    }).then(() => {
      for (let key in this.contentPost) {
        if(this.contentPost[key].status === "active") {
          this.posts.push(this.contentPost[key])
        }
      }
    }).then(() => {
      console.log('contentPost ', this.contentPost)
      //this.loadingCarousel = false
    })
  }

}
