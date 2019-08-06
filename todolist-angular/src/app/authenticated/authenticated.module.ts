import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenticatedComponent } from "./authenticated.component";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AuthenticatedHeaderComponent } from "./authenticated-header.component";
import { AuthenticatedMenuComponent } from "./authenticated-menu.component";
@NgModule({
  declarations: [
    AuthenticatedComponent,
    AuthenticatedHeaderComponent,
    AuthenticatedMenuComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class AuthenticatedModule {}
