import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { IgxSnackbarComponent } from '@infragistics/igniteui-angular/snackbar';
import { IgxIconComponent } from '@infragistics/igniteui-angular/icon';
import { IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular/input-group';
import { IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular/directives';
import { AuthServiceService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { getErrorMessage } from '../core/utils';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss'],
    animations: [moveIn(), fallIn()],
    host: { '[@moveIn]': '' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [IgxIconComponent, ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, RouterLink, IgxSnackbarComponent]
})
export class EmailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthServiceService);

  readonly snack = viewChild.required<IgxSnackbarComponent>('snack');
  readonly returnUrl = toSignal(
    this.route.queryParamMap.pipe(map(params => params.get('return') || '/home')),
    { initialValue: '/home' }
  );
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
    void this.authService.signInAndRedirect(email, password, this.returnUrl()).catch((error: unknown) => {
      this.snack().open(getErrorMessage(error));
    });
  }
}
