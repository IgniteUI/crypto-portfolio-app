import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { IgxFinancialChartModule, IgxPieChartModule, IgxLegendModule, IgxItemLegendModule } from 'igniteui-angular-charts';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IgxExcelExporterService, IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxCardModule, IgxInputGroupModule, IgxListModule, IgxFilterModule, IgxTabsModule, IgxSnackbarModule, IgxDialogModule, IgxToggleModule, IgxGridModule, IgxComboModule, IgxActionStripModule, IgxFocusModule, IgxDividerModule, IgxExpansionPanelModule, IgxTooltipModule } from '@infragistics/igniteui-angular';
import { ItemService } from './app/services/block-item.service';
import { DataService } from './app/services/data.service';

 if (environment.production) {
  enableProdMode();
 }

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(FormsModule, BrowserModule, AppRoutingModule, IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxFinancialChartModule, IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxCardModule, IgxInputGroupModule, IgxListModule, IgxFilterModule, IgxTabsModule, IgxSnackbarModule, IgxDialogModule, IgxToggleModule, IgxGridModule, IgxComboModule, IgxActionStripModule, IgxFocusModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule, AngularFireAuthModule, AngularFireStorageModule, AngularFireDatabaseModule, IgxDividerModule, IgxExpansionPanelModule, IgxTooltipModule, IgxPieChartModule, IgxLegendModule, IgxItemLegendModule),
        DataService, ItemService, IgxExcelExporterService,
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.log(err));
