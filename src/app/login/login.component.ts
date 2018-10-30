import { Component, OnInit, HostBinding } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
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
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()).then(function() {
      return firebase.auth().getRedirectResult();
    }).then(function(result) {
      this.router.navigate([this.return]);
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      this.error = errorMessage;
    });
  }

  loginGoogle() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(
      (success) => {
      this.router.navigate([this.return]);
    }).catch(
      (err) => {
      this.error = err;
    });
  }

}
