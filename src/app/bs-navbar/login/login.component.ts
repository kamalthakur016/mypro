import { BsNavbarComponent } from './../bs-navbar.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  user = this.user;
  constructor(private afAuth: AngularFireAuth) {
  
   }

  login(){

     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  
  }
}
