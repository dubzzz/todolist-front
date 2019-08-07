import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuardService } from "./auth-guard.service";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSnackBarModule],
  providers: [AuthGuardService]
})
export class AuthModule {}
