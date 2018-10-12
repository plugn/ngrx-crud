import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    [StoreModule.forRoot({ count: counterReducer })],
    //[EffectsModule.forRoot([AuthEffects])],
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
