import { Component } from "@angular/core";

@Component({
  selector: "app-authenticated",
  templateUrl: "./authenticated.component.html",
  styleUrls: ["./authenticated.component.css"]
})
export class AuthenticatedComponent {
  expandedMenu = false;

  toggleMenu() {
    this.expandedMenu = !this.expandedMenu;
  }
}
