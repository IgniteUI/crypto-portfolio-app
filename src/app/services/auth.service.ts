import { Injectable, NgZone, inject } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData: any;
  private auth = inject(Auth);

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

  googleAuth(returnUrl?: string) {
    return this.authLogin(new GoogleAuthProvider(), returnUrl);
  }

  
  facebookAuth(returnUrl?: string) {
    return this.authLogin(new FacebookAuthProvider(), returnUrl);
  }

  authLogin(provider, returnUrl?: string) {
    return signInWithPopup(this.auth, provider)
    .then(() => {
          const targetUrl = returnUrl || '/home';
          
          // Retry navigation if it fails the first time
          return this.router.navigate([targetUrl]).then((success) => {
            if (!success) {
              // If first navigation fails, try again after a short delay
              return new Promise((resolve) => {
                setTimeout(() => {
                  this.router.navigate([targetUrl]).then(resolve);
                }, 100);
              });
            }
            return success;
          });
    }).catch((error) => {
      console.error('Social auth error:', error);
      throw error;
    });
  }

  signInAndRedirect(email: string, password: string, returnUrl?: string) {
    console.log('signInAndRedirect called with returnUrl:', returnUrl);
    return signInWithEmailAndPassword(this.auth, email, password)
    .then(() => {
      const targetUrl = returnUrl || '/home';
      console.log('Email auth redirecting to:', targetUrl);
      return this.router.navigate([targetUrl]);
    });
  }

  signOut() {
    return signOut(this.auth).then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    });
  }
}
