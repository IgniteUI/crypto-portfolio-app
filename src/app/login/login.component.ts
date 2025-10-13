import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { moveIn } from '../router.animations';
import { facebook, google } from '@igniteui/material-icons-extended';
import { IgxIconService, IgxIconModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { AuthServiceService } from '../services/auth.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [moveIn()],
    host: { '[@moveIn]': '' },
    standalone: true,
    imports: [NgIf, IgxIconModule, IgxButtonModule, IgxRippleModule, RouterLink, RouterLinkActive, LoadingSpinnerComponent]
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
         .subscribe(params => {
            this.return = params['return'] ? decodeURIComponent(params['return']) : '/home';
         });

      // Register a single icon
      this.iconService.addSvgIconFromText(facebook.name, facebook.value, 'imx-icons');
      this.iconService.addSvgIconFromText(google.name, google.value, 'imx-icons');
   }

   loginFb() {
      this.authService.facebookAuth(this.return).catch(error => {
         console.error('Facebook auth error:', error);
      });
   }

   loginGoogle() {
      this.authService.googleAuth(this.return).catch(error => {
         console.error('Google auth error:', error);
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
