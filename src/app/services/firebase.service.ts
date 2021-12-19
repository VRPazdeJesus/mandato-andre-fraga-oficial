import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import 'firebase/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireauth: AngularFireAuth, private db: AngularFireDatabase) { }

  recoveryPassword(value) {
    return new Promise((resolve, reject) => {
      this.fireauth.sendPasswordResetEmail(value).then(
        res => resolve(res),
        err => reject(err))
    })
  }

  getContentPage(value: string) {
    return new Promise((resolve, reject) => {
      let database = firebase.database().ref('pages/'+value)
        .once('value',(snap) => {
            database.then(
            res => resolve(snap.val()),
            err => reject(err))
        })      
    })
  }

  login(emailValue: any, passwordValue: any) {
    console.log('fiz login')
    return new Promise((resolve, reject) => {
      this.fireauth.signInWithEmailAndPassword(emailValue, passwordValue).then(
        res => resolve(res),
        err => reject(err))
    })
  }

}
