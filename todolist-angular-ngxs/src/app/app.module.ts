import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { AuthenticatedModule } from './authenticated/authenticated.module';
import { AuthenticationState } from 'src/state/authentication/authentication.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxsModule.forRoot([AuthenticationState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    AuthenticatedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
