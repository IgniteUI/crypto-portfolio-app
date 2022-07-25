import { Component, OnInit, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { routes } from './app-routing.module';
import { IgxNavigationDrawerComponent, IgxLayoutDirective } from '@infragistics/igniteui-angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthServiceService } from './services/auth.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
   public isIE;
   name: any;
   public innerWidth: any;
   public darkTheme = false;
   public topNavLinks: Array<{
      path: string,
      name: string,
      icon: string,
      subItem: boolean
   }> = [];
   @ViewChild(IgxNavigationDrawerComponent, { static: true }) public navdrawer: IgxNavigationDrawerComponent;
   @ViewChild(IgxLayoutDirective, { read: IgxLayoutDirective, static: true }) public layout: IgxLayoutDirective;

   @HostListener('window:resize', ['$event'])
   onResize(event) {
      this.innerWidth = window.innerWidth;
   }

   constructor(private router: Router, public afAuth: AngularFireAuth, private authService: AuthServiceService) {
      this.isIE = /trident\//i.test(window.navigator.userAgent);
      for (const route of routes) {
         if (route.path && route.data && route.path.indexOf('*') === -1) {
            this.topNavLinks.push({
               name: route.data.text,
               path: '/' + route.path,
               icon: route.data.iconName,
               subItem: route.data.subItem
            });
         }
      }

      this.afAuth.authState.subscribe(auth => {
         if (auth) {
            if (auth.displayName) {
               this.name = auth.displayName;
            } else {
               this.name = auth.email.split('@')[0];
            }
         }
      });
   }

   public ngOnInit(): void {
      document.body.classList.add('light-theme');
      document.body.style.background = '#eee';
      this.router.events
         .pipe(filter((x) => x instanceof NavigationStart))
         .subscribe((event: NavigationStart) => {
            if (event.url !== '/' && !this.navdrawer.pin) {
               // Close drawer when selecting a view on mobile (unpinned)
               this.navdrawer.close();
            }
         });

      this.innerWidth = window.innerWidth;
   }

   public changeTheme(dark?: boolean) {
      if (dark) {
         this.darkTheme = true;
         document.body.classList.remove('light-theme');
         document.body.classList.add('dark-theme');
         document.body.style.background = '#414141';
      } else {
         document.body.classList.remove('dark-theme');
         document.body.classList.add('light-theme');
         document.body.style.background = '#eee';
         this.darkTheme = false;
      }
   }

   public logout() {
      this.authService.signOut();
   }

   public login() {
      this.router.navigate(['/login']);
   }

}
