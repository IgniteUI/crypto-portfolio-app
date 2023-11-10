import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

	constructor(private router: Router, private authService: AuthServiceService) { }

	canActivate(): Observable<boolean> | Promise<boolean> | boolean {
		if (this.authService.isLoggedIn !== true) {
			this.router.navigate(['/login']);
		}
		return true;
	}
}
