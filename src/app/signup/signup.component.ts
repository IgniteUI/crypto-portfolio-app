import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { IgxSnackbarComponent, IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule } from '@infragistics/igniteui-angular';
import { AuthServiceService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [moveIn(), fallIn()],
    // tslint:disable-next-line: use-host-property-decorator
    host: { '[@moveIn]': '' },
    standalone: true,
    imports: [IgxIconModule, FormsModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, RouterLink, IgxSnackbarModule]
})
export class SignupComponent {

   state = '';
   error: any;
   email: any;
   password: any;
   @ViewChild('snack', { static: true }) public snack: IgxSnackbarComponent;

   constructor(private router: Router, private authService: AuthServiceService) { }

   onSubmit(formData) {
      if (formData.valid) {
         this.authService.signUp(formData.value.email, formData.value.password).then(() => {
               this.router.navigate(['/login']);
            }).catch(
               (err) => {
                  this.snack.open(err.message);
            });
      }
   }
}
