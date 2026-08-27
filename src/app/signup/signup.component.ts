import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { IgxSnackbarComponent } from '@infragistics/igniteui-angular/snackbar';
import { IgxIconComponent } from '@infragistics/igniteui-angular/icon';
import { IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular/input-group';
import { IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular/directives';
import { AuthServiceService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getErrorMessage } from '../core/utils';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [moveIn(), fallIn()],
    host: { '[@moveIn]': '' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [IgxIconComponent, ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, RouterLink, IgxSnackbarComponent]
})
export class SignupComponent {
   private readonly router = inject(Router);
   private readonly authService = inject(AuthServiceService);

   readonly snack = viewChild.required<IgxSnackbarComponent>('snack');
   readonly form = new FormGroup({
      email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
   });

   onSubmit(): void {
      if (this.form.invalid) {
         this.form.markAllAsTouched();
         return;
      }

      const { email, password } = this.form.getRawValue();
      void this.authService.signUp(email, password).then(() => {
               return this.router.navigate(['/login']);
            }).catch(
               (error: unknown) => {
                  this.snack().open(getErrorMessage(error));
            });
   }
}
