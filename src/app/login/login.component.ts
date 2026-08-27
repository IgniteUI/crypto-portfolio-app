import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { moveIn } from '../router.animations';
import { facebook, google } from '@igniteui/material-icons-extended';
import { IgxIconComponent, IgxIconService } from '@infragistics/igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular/directives';
import { AuthServiceService } from '../services/auth.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { map } from 'rxjs/operators';
import { getErrorMessage } from '../core/utils';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [moveIn()],
    host: { '[@moveIn]': '' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [IgxIconComponent, IgxButtonDirective, IgxRippleDirective, RouterLink, RouterLinkActive, LoadingSpinnerComponent]
})
export class LoginComponent {
   private readonly router = inject(Router);
   private readonly route = inject(ActivatedRoute);
   private readonly iconService = inject(IgxIconService);
   private readonly authService = inject(AuthServiceService);

   readonly returnUrl = toSignal(
      this.route.queryParamMap.pipe(map(params => params.get('return') || '/home')),
      { initialValue: '/home' }
   );
   readonly error = signal('');
   readonly showSpinner = signal(localStorage.getItem('showSpinner') === 'true');

   constructor() {
      // Register a single icon
      this.iconService.addSvgIconFromText(facebook.name, facebook.value, 'imx-icons');
      this.iconService.addSvgIconFromText(google.name, google.value, 'imx-icons');
   }

   loginFb(): void {
      void this.authService.facebookAuth(this.returnUrl()).catch((error: unknown) => {
         this.error.set(getErrorMessage(error));
      });
   }

   loginGoogle(): void {
      void this.authService.googleAuth(this.returnUrl()).catch((error: unknown) => {
         this.error.set(getErrorMessage(error));
      });
   }

   loginEmail(): void {
      void this.router.navigate(['/email'], {
         queryParams: {
            return: this.returnUrl()
         }
      });
   }
}
