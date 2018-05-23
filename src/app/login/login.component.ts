import { Component, OnInit, HostBinding } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
// import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {
  return = '';

  error: any;
  constructor(public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {

    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl(this.return);
      }
    });

  }

  ngOnInit() {
    // Get the query params
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/forums');
  }

  loginFb() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        (success) => {
          this.router.navigate([this.return]);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (success) => {
      this.router.navigate([this.return]);
    }).catch(
      (err) => {
      this.error = err;
    });
  }

}
