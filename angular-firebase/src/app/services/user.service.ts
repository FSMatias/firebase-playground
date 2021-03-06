import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
  //  public db: AngularFirestore,
    public afAuth: AngularFireAuth) { }

    getCurrentUser(){
      return new Promise<any>((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user: firebase.User) => {
          if (user) {
            resolve(user);
          } else {
            reject('No user logged in');
          }
        });
      });
    }
}
