import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule,
  IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxCardModule,
  IgxInputGroupModule, IgxFilterModule, IgxGridModule, IgxListModule, IgxTabsModule, IgxSnackbarModule, IgxDialogModule
} from 'igniteui-angular';

import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { IgxFinancialChartModule } from 'igniteui-angular-charts/ES5/igx-financial-chart-module';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { BlockGridComponent } from './block-grid/block-grid.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlockListComponent } from './block-list/block-list.component';
import { ItemService } from './block-item.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyASqXec1QsPpOZ6Pbgk5YuYOnmiewOOvhc',
  authDomain: 'crypto-portfolio-tracker.firebaseapp.com',
  databaseURL: 'https://crypto-portfolio-tracker.firebaseio.com',
  projectId: 'crypto-portfolio-tracker',
  storageBucket: 'crypto-portfolio-tracker.appspot.com',
  messagingSenderId: '1078645280256'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent,
    BlockGridComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    PortfolioComponent,
    BlockListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxFinancialChartModule,
    HttpClientModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxFilterModule,
    IgxTabsModule,
    IgxSnackbarModule,
    IgxDialogModule,
    IgxGridModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  providers: [DataService, AuthGuard, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
