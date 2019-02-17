import { CanActivate, Router, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private auth: AngularFireAuth, private router: Router, private route: ActivatedRoute) { }

	canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> {
		return Observable.from(this.auth.authState)
			.take(1)
			.map(state => !!state)
			.do(authenticated => {
				if (!authenticated) {
					this.router.navigate(['/login'], {
						queryParams: {
							return: routerState.url
						}
					});
				}
			});
	}
}
