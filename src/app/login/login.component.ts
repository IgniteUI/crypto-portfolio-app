import { Component, OnInit, HostBinding } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public afAuth: AngularFireAuth, private router: Router) {

    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/statistics');
      }
    });

  }

  loginFb() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        (success) => {
        this.router.navigate(['/statistics']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (success) => {
      this.router.navigate(['/statistics']);
    }).catch(
      (err) => {
      this.error = err;
    });
  }


  ngOnInit() {
  }

}
