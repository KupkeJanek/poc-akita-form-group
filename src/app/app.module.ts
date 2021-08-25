import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { ConsumerOneComponent } from './consumer-one/consumer-one.component';
import { ConsumerTwoComponent } from './consumer-two/consumer-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { MyFormEffects } from 'src/store/my-form.effects';
import { ConsumerThreeComponent } from './consumer-three/consumer-three.component';
@NgModule({
  declarations: [AppComponent, ConsumerOneComponent, ConsumerTwoComponent, ConsumerThreeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    AkitaNgEffectsModule.forRoot([MyFormEffects]),
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
