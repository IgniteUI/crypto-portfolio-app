import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IgxNavigationDrawerModule,
          IgxNavbarModule,
          IgxLayoutModule,
          IgxRippleModule,
          IgxAvatarModule,
          IgxButtonModule,
          IgxIconModule,
          IgxCardModule,
          IgxInputGroupModule,
          IgxFilterModule
} from 'igniteui-angular/main';

import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { IgxFinancialChartModule } from 'igniteui-angular-charts/ES5/igx-financial-chart-module';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent
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
    IgxFilterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
