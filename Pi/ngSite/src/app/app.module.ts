import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatternsComponent } from './patterns/patterns.component';
import { MaterialModule } from './materials/materials.module';
import { LightsComponent } from './lights/lights.component';

@NgModule({
  declarations: [AppComponent, PatternsComponent, LightsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
