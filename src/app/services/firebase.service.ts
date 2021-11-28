import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireauth: AngularFireAuth) { }

  recoveryPassword(value) {
    return new Promise((resolve, reject) => {
      this.fireauth.sendPasswordResetEmail(value).then(
        res => resolve(res),
        err => reject(err))
    })
  }
}
