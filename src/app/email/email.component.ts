import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class EmailComponent implements OnInit {
  state = '';
  error: any;
  email: any;
  password: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/statistics');
      }
    });
  }


  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/statistics']);
        }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          });
    }
  }

  ngOnInit() {
  }

}
