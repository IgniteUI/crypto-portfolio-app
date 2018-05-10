import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BlockGridComponent } from './block-grid/block-grid.component';
import { AuthGuard } from './auth.service';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Top 100 Crypto`s', iconName: 'call_made' } },
  { path: 'block-grid', component: BlockGridComponent, data: { text: 'Grid view', iconName: 'grid_on' } },
  { path: 'statistics', component: StatisticsComponent,
    data: { text: 'Volatility', iconName: 'insert_chart_outlined', cryptoName: 'BTC', daysCount: 100 },
    canActivate: [AuthGuard] },
  { path: 'portfolio', component: PortfolioComponent, data: { text: 'My portfolio', iconName: 'account_box' } },
  { path: 'login', component: LoginComponent },
  { path: 'email', component: EmailComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
