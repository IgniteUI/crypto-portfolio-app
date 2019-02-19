import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { IgxSnackbarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class EmailComponent implements OnInit {
  return = '';
  error: any;
  email: any;
  password: any;
  @ViewChild('snack') public snack: IgxSnackbarComponent;

  constructor(public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl(this.return);
      }
    });
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/home');
  }
  
  onSubmit(formData) {
    if (formData.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          this.router.navigate([this.return]);
        }).catch(
          (err) => {
            this.snack.show();
            this.error = err;
          });
    }
  }
}
