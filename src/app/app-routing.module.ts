import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BlockGridComponent } from './block-grid/block-grid.component';
import { AuthGuard } from './auth.service';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Top 100 Crypto`s', iconName: 'call_made' } },
  { path: 'block-grid', component: BlockGridComponent, data: { text: 'Grid view', iconName: 'account_box' } },
  { path: 'statistics', component: StatisticsComponent, data: { text: 'Volatility', iconName: 'show_chart' }, canActivate: [AuthGuard] },
  { path: 'block-grid', component: BlockGridComponent, data: { text: 'My Blockfolio', iconName: 'account_box' } },
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
