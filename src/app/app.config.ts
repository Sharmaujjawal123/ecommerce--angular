import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule, provideStore } from '@ngrx/store';
import { authReducer } from './state/auth/auth.reducer';
import { userReducer } from './User/user.reducer';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideStore(),
    importProvidersFrom( StoreModule.forRoot({auth:authReducer,user:userReducer})), provideHttpClient(withFetch()),
  ]
};
