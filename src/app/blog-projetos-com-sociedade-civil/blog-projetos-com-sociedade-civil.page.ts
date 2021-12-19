import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PostPage } from '../modal/post/post.page';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-blog-projetos-com-sociedade-civil',
  templateUrl: './blog-projetos-com-sociedade-civil.page.html',
  styleUrls: ['./blog-projetos-com-sociedade-civil.page.scss'],
})
export class BlogProjetosComSociedadeCivilPage implements OnInit {

  private contentPost: any
  private posts: any = []

  constructor(
    private nav: NavController,
    public modalController: ModalController,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.getPost()
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
