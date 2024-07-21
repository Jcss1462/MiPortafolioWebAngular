import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideHttpClient(),
  provideAnimations(),
  provideToastr({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  }), provideFirebaseApp(() => initializeApp({"projectId":"miportafolioweb-1573a",
                                              "appId":"1:71796819636:web:f02cc82effadefcca4f9e1",
                                              "storageBucket":"miportafolioweb-1573a.appspot.com",
                                              "apiKey":"AIzaSyB97UtXMIiCe_MtNNWKP7MozKijfMHD2JM",
                                              "authDomain":"miportafolioweb-1573a.firebaseapp.com",
                                              "messagingSenderId":"71796819636",
                                              "measurementId":"G-6W6N55VT2W"})), 
  provideFirestore(() => getFirestore()), 
  provideStorage(() => getStorage())]
};
