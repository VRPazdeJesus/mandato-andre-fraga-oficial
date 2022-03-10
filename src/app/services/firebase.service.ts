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
    return new Promise((resolve, reject) => {
      this.fireauth.signInWithEmailAndPassword(emailValue, passwordValue).then(
        res => resolve(res),
        err => reject(err))
    })
  }

  register(data: any) {
    let day = new Date().toLocaleDateString('pt-br')

    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(() => {
        firebase.database().ref('users/'+ data.name).set({
          name: data.name,
          birthDate: data.birthDate,
          telephone: data.telephone,
          address: data.address,
          district: data.district,
          email: data.email,
          socialNetwork: data.socialNetwork,
          andreVoter: data.andreVoter,
          participantAmbassadorNetwork: data.participantAmbassadorNetwork,
          dayregister: day
        }).then(
          res => resolve(res),
          err => reject(err))
      })
    })
  }

}
