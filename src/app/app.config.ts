import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { IgxExcelExporterService } from '@infragistics/igniteui-angular/grids/core';
import { provideIgniteIntl } from '@infragistics/igniteui-angular/core';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { DataService } from './services/data.service';
import { MockDataService } from './services/mock-data.service';
import { CryptoCompareDataService } from './services/crypto-compare-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(appRoutes, withHashLocation()),
    provideHttpClient(withFetch()),
    provideIgniteIntl(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    {
      provide: DataService,
      useClass: environment.useMockData ? MockDataService : CryptoCompareDataService
    },
    IgxExcelExporterService
  ]
};
