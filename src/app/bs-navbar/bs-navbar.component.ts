import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  user$ : Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) { 
    this.user$= afAuth.authState;
  }

  logOut(){
    this.afAuth.auth.signOut();
  }
}
