import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-authenticated-header",
  templateUrl: "./authenticated-header.component.html",
  styleUrls: ["./authenticated-header.component.css"]
})
export class AuthenticatedHeaderComponent {
  @Input() expandedMenu: boolean;
  @Output() toggleMenu = new EventEmitter<void>();
}
