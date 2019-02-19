import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { IgxSnackbarComponent } from 'igniteui-angular';

@Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.scss'],
   animations: [moveIn(), fallIn()],
   host: { '[@moveIn]': '' }
})
export class SignupComponent implements OnInit {

   state = '';
   error: any;
   email: any;
   password: any;
   @ViewChild('snack') public snack: IgxSnackbarComponent;

   constructor(public afAuth: AngularFireAuth, private router: Router) { }

   onSubmit(formData) {
      if (formData.valid) {
         this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
            (success) => {
               this.router.navigate(['/login']);
            }).catch(
               (err) => {
                  this.snack.show();
                  this.error = err;
            });
      }
   }

   ngOnInit() {
   }

}