import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, ViewEncapsulation, computed, inject, signal, viewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationStart, Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { navigationLinks } from './app.routes';
import { IgxNavigationDrawerComponent, IgxNavDrawerItemDirective, IgxNavDrawerTemplateDirective } from '@infragistics/igniteui-angular/navigation-drawer';
import { IgxButtonDirective, IgxFlexDirective, IgxLayoutDirective, IgxRippleDirective } from '@infragistics/igniteui-angular/directives';
import { IgxIconComponent } from '@infragistics/igniteui-angular/icon';
import { IgxNavbarComponent } from '@infragistics/igniteui-angular/navbar';
import { AuthServiceService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      '(window:resize)': 'onResize()'
    },
    imports: [
        IgxLayoutDirective,
        IgxFlexDirective,
        IgxNavigationDrawerComponent,
        IgxNavDrawerItemDirective,
        IgxNavDrawerTemplateDirective,
        IgxRippleDirective,
        RouterLinkActive,
        RouterLink,
        IgxIconComponent,
        IgxNavbarComponent,
        IgxButtonDirective,
        RouterOutlet
    ]
})
export class AppComponent implements OnInit {
   private readonly router = inject(Router);
   private readonly authService = inject(AuthServiceService);
   private readonly destroyRef = inject(DestroyRef);
   private readonly document = inject(DOCUMENT);

   readonly navdrawer = viewChild.required<IgxNavigationDrawerComponent>('nav');
   readonly user = this.authService.user;
   readonly name = computed(() => {
      const user = this.user();
      return user?.displayName || user?.email?.split('@')[0] || '';
   });
   readonly innerWidth = signal(typeof window === 'undefined' ? 0 : window.innerWidth);
   readonly darkTheme = signal(false);
   readonly topNavLinks = navigationLinks;

   public ngOnInit(): void {
      this.setTheme(false);
      this.router.events
         .pipe(
            filter((event): event is NavigationStart => event instanceof NavigationStart),
            takeUntilDestroyed(this.destroyRef)
         )
         .subscribe(event => {
            const drawer = this.navdrawer();
            if (event.url !== '/' && !drawer.pin) {
               // Close drawer when selecting a view on mobile (unpinned)
               drawer.close();
            }
         });
   }

   public onResize(): void {
      this.innerWidth.set(window.innerWidth);
   }

   public changeTheme(): void {
      this.setTheme(!this.darkTheme());
   }

   public logout(): void {
      void this.authService.signOut();
   }

   public login(): void {
      // Preserve current URL to redirect back after login
      const currentUrl = this.router.url;
      void this.router.navigate(['/login'], { queryParams: { return: currentUrl } });
   }

   private setTheme(dark: boolean): void {
      this.darkTheme.set(dark);
      this.document.body.classList.toggle('dark-theme', dark);
      this.document.body.classList.toggle('light-theme', !dark);

      // The Ignite UI theme ships as its own bundle rather than nested under the
      // body class: nesting theme() makes the library emit each component's local
      // inheriting variables (--background, --color, ...) onto that class too,
      // where the last one wins and bleeds over the whole document.
      const link = this.document.getElementById('ig-theme') as HTMLLinkElement | null;
      const href = dark ? 'theme-dark.css' : 'theme-light.css';
      if (link && !link.getAttribute('href')?.endsWith(href)) {
         link.setAttribute('href', href);
      }
   }
}
