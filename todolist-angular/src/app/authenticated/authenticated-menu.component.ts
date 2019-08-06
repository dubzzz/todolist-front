import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-authenticated-menu",
  templateUrl: "./authenticated-menu.component.html",
  styleUrls: ["./authenticated-menu.component.css"]
})
export class AuthenticatedMenuComponent {
  constructor(public router: Router) {}

  goTo(pageLink: string) {
    this.router.navigate([pageLink]);
  }
}
