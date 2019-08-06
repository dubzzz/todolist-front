import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenticatedComponent } from "./authenticated.component";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AuthenticatedHeaderComponent } from "./authenticated-header.component";
@NgModule({
  declarations: [AuthenticatedComponent, AuthenticatedHeaderComponent],
  imports: [CommonModule, MatBadgeModule, MatIconModule, MatToolbarModule]
})
export class AuthenticatedModule {}
