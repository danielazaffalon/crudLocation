import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"testcifo-d32cf","appId":"1:760909605197:web:1243fb94dba0fc72e9ef04","storageBucket":"testcifo-d32cf.appspot.com","apiKey":"AIzaSyCe0fDz2w9k6t_VNdCkdqRS_Hh_1Hohfxo","authDomain":"testcifo-d32cf.firebaseapp.com","messagingSenderId":"760909605197","measurementId":"G-1TV04V6DM7"})), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"testcifo-d32cf","appId":"1:760909605197:web:1243fb94dba0fc72e9ef04","storageBucket":"testcifo-d32cf.appspot.com","apiKey":"AIzaSyCe0fDz2w9k6t_VNdCkdqRS_Hh_1Hohfxo","authDomain":"testcifo-d32cf.firebaseapp.com","messagingSenderId":"760909605197","measurementId":"G-1TV04V6DM7"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
