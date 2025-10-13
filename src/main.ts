import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import {
  IgxFinancialChartModule,
  IgxPieChartModule,
  IgxLegendModule,
  IgxItemLegendModule
} from 'igniteui-angular-charts';
import {
  IgxExcelExporterService,
  IgxNavigationDrawerModule,
  IgxNavbarModule,
  IgxLayoutModule,
  IgxRippleModule,
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
  IgxToggleModule,
  IgxGridModule,
  IgxComboModule,
  IgxActionStripModule,
  IgxFocusModule,
  IgxDividerModule,
  IgxExpansionPanelModule,
  IgxTooltipModule
} from '@infragistics/igniteui-angular';
import { ItemService } from './app/services/block-item.service';
import { DataService } from './app/services/data.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      IgxNavigationDrawerModule,
      IgxNavbarModule,
      IgxLayoutModule,
      IgxRippleModule,
      IgxFinancialChartModule,
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
      IgxToggleModule,
      IgxGridModule,
      IgxComboModule,
      IgxActionStripModule,
      IgxFocusModule,
      IgxDividerModule,
      IgxExpansionPanelModule,
      IgxTooltipModule,
      IgxPieChartModule,
      IgxLegendModule,
      IgxItemLegendModule
    ),

    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),

    DataService,
    ItemService,
    IgxExcelExporterService,
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch(err => console.error(err));
