import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { environment } from "./environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginModule } from "./login/login.module";
import { AuthenticatedModule } from "./authenticated/authenticated.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    AuthenticatedModule
  ],
  providers: environment.production
    ? [
        {
          provide: APP_BASE_HREF,
          useValue: "https://dubzzz.github.io/todolist-front/todolist-angular/"
        }
      ]
    : [],
  bootstrap: [AppComponent]
})
export class AppModule {}
