import { Injectable, NgZone, inject } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData: any;
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  constructor(
    public router: Router,
    public ngZone: NgZone
  ) {
    authState(this.auth).subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  signIn(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signUp(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  googleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }

  
  facebookAuth() {
    return this.authLogin(new FacebookAuthProvider());
  }

  authLogin(provider) {
    return signInWithPopup(this.auth, provider)
    .then(() => {
          this.router.navigate(['/home']);
    }).catch((error) => {
      window.alert(error);
    });
  }

  signOut() {
    return signOut(this.auth).then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    });
  }
}
