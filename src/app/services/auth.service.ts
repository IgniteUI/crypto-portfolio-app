import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  readonly user = toSignal(authState(this.auth), { initialValue: null });

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  googleAuth(returnUrl?: string) {
    return this.authLogin(new GoogleAuthProvider(), returnUrl);
  }

  facebookAuth(returnUrl?: string) {
    return this.authLogin(new FacebookAuthProvider(), returnUrl);
  }

  private authLogin(provider: AuthProvider, returnUrl?: string) {
    return signInWithPopup(this.auth, provider)
      .then(() => this.router.navigateByUrl(returnUrl || '/home'));
  }

  signInAndRedirect(email: string, password: string, returnUrl?: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => this.router.navigateByUrl(returnUrl || '/home'));
  }

  signOut() {
    return signOut(this.auth).then(() => {
      return this.router.navigate(['/home']);
    });
  }
}
