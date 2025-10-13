import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

	constructor(private router: Router, private authService: AuthServiceService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		if (this.authService.isLoggedIn !== true) {
			// Store the attempted URL for redirecting after login
			this.router.navigate(['/login'], { queryParams: { return: state.url } });
			return false;
		}
		return true;
	}
}
