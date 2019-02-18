import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
   animations: [moveIn()],
   host: { '[@moveIn]': '' }
})
export class LoginComponent implements OnInit, AfterViewInit {
   return = '';
   error: any;
   googleAuthProvider = new firebase.auth.GoogleAuthProvider();
   facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

   showSpinner = localStorage.getItem('showSpinner') === 'true' ? true : false;

   constructor(public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {

      this.afAuth.authState.subscribe(auth => {
         localStorage.setItem('showSpinner', 'false');
         if (auth) {
            this.router.navigateByUrl(this.return);
         }
      });

   }

   ngOnInit() {
      // Get the query params
      this.route.queryParams
         .subscribe(params => this.return = params['return'] || '/home');
   }

   ngAfterViewInit() {
   }

   loginFb() {
      this.showSpinner = true;
      localStorage.setItem('showSpinner', 'true');
      this.afAuth.auth.signInWithRedirect(this.facebookAuthProvider);
      this.afAuth.auth.getRedirectResult().then(result => {
         if (result.user) {
            this.showSpinner = true;
            localStorage.setItem('showSpinner', 'true');
            this.router.navigate([this.return]);
         }
      }).catch(function (error) {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
         this.error = errorMessage;
      });
   }

   loginGoogle() {
      this.afAuth.auth.signInWithRedirect(this.googleAuthProvider).then(
         (success) => {
            this.router.navigate([this.return]);
         }).catch(
            (err) => {
               this.error = err;
         });
   }

   loginEmail() {
      this.router.navigate(['/email'], {
         queryParams: {
            return: this.return
         }
      });
   }
}
