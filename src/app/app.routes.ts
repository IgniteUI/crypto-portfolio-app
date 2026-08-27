import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

export interface NavigationLink {
  readonly path: string;
  readonly name: string;
  readonly icon: string;
  readonly subItem: boolean;
}

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'portfolio',
    loadComponent: () => import('./portfolio/portfolio.component').then(({ PortfolioComponent }) => PortfolioComponent),
    canActivate: [authGuard],
    data: { text: 'My portfolio', iconName: 'account_box' }
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(({ HomeComponent }) => HomeComponent),
    data: { text: 'Top 100 Cryptos', iconName: 'call_made' }
  },
  {
    path: 'block-grid',
    loadComponent: () => import('./block-grid/block-grid.component').then(({ BlockGridComponent }) => BlockGridComponent),
    data: { text: 'Grid view', iconName: 'grid_on', subItem: true }
  },
  {
    path: 'block-list',
    loadComponent: () => import('./block-list/block-list.component').then(({ BlockListComponent }) => BlockListComponent),
    data: { text: 'List view', iconName: 'list_alt', subItem: true }
  },
  {
    path: 'statistics',
    loadComponent: () => import('./statistics/statistics.component').then(({ StatisticsComponent }) => StatisticsComponent),
    data: { text: 'Volatility', iconName: 'insert_chart_outlined', cryptoName: 'ETH', daysCount: 100 }
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(({ LoginComponent }) => LoginComponent)
  },
  {
    path: 'email',
    loadComponent: () => import('./email/email.component').then(({ EmailComponent }) => EmailComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.component').then(({ SignupComponent }) => SignupComponent)
  },
  { path: '**', redirectTo: 'home' }
];

export const navigationLinks: readonly NavigationLink[] = appRoutes.flatMap(route => {
  const path = route.path;
  const text = route.data?.['text'];
  const icon = route.data?.['iconName'];

  if (!path || typeof text !== 'string' || typeof icon !== 'string') {
    return [];
  }

  return [{
    path: `/${path}`,
    name: text,
    icon,
    subItem: route.data?.['subItem'] === true
  }];
});
