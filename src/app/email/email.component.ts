import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { IgxSnackbarComponent } from '@infragistics/igniteui-angular';
import { AuthServiceService } from '../services/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [moveIn(), fallIn()],
// tslint:disable-next-line: use-host-property-decorator
  host: { '[@moveIn]': '' }
})
export class EmailComponent implements OnInit {
  return = '';
  error: any;
  email: any;
  password: any;
  @ViewChild('snack', { static: true }) public snack: IgxSnackbarComponent;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthServiceService) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/home');
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.signIn(formData.value.email, formData.value.password).then((result) => {
          this.router.navigate(['/home']);
      }).catch((err) => {
        this.snack.open(err.message);
      });
    }
  }
}
