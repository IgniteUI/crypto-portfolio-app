import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { moveIn } from '../router.animations';
import { facebook, google } from '@igniteui/material-icons-extended';
import { IgxIconService } from '@infragistics/igniteui-angular';
import { AuthServiceService } from '../services/auth.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
   animations: [moveIn()],
   host: { '[@moveIn]': '' }
})
export class LoginComponent implements OnInit {
   return = '';
   error: any;
   googleAuthProvider: any;
   facebookAuthProvider: any;

   showSpinner = localStorage.getItem('showSpinner') === 'true' ? true : false;

   constructor(private router: Router, private route: ActivatedRoute,
      private iconService: IgxIconService, private authService: AuthServiceService) {
   }

   ngOnInit() {
      // Get the query params
      this.route.queryParams
         .subscribe(params => this.return = params['return'] || '/home');

      // Register a single icon
      this.iconService.addSvgIconFromText(facebook.name, facebook.value, 'imx-icons');
      this.iconService.addSvgIconFromText(google.name, google.value, 'imx-icons');
   }

   // loginFb() {
   //    this.showSpinner = true;
   //    localStorage.setItem('showSpinner', 'true');
   //    this.facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

   //    this.afAuth.signInWithRedirect(this.facebookAuthProvider);
   //    this.afAuth.getRedirectResult().then(result => {
   //       if (result.user) {
   //          this.showSpinner = true;
   //          localStorage.setItem('showSpinner', 'true');
   //          this.router.navigate([this.return]);
   //       }
   //    }).catch(function (error) {
   //       // Handle Errors here.
   //       const errorCode = error.code;
   //       const errorMessage = error.message;
   //       this.error = errorMessage;
   //    });
   // }

   loginGoogle() {
      this.authService.googleAuth();
   }

   loginEmail() {
      this.router.navigate(['/email'], {
         queryParams: {
            return: this.return
         }
      });
   }
}
