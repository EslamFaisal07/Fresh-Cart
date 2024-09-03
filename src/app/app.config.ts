import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxPaginationModule} from 'ngx-pagination';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes , withViewTransitions() , withInMemoryScrolling({scrollPositionRestoration:'top'})),
     provideClientHydration() ,
    provideHttpClient(withFetch()  ,  withInterceptors([loadingInterceptor,headerInterceptor, errorsInterceptor])),
provideAnimations(),
provideToastr(),
importProvidersFrom(NgxSpinnerModule  ),
importProvidersFrom(SweetAlert2Module ,BrowserModule, NgxPaginationModule , BrowserAnimationsModule),

provideHttpClient()
  ]
};
