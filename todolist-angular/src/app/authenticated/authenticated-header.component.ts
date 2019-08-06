import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-authenticated-header",
  templateUrl: "./authenticated-header.component.html",
  styleUrls: ["./authenticated-header.component.css"]
})
export class AuthenticatedHeaderComponent implements OnInit {
  @Input() expandedMenu: boolean;
  @Output() toggleMenu = new EventEmitter<void>();

  username$: Observable<string>;

  constructor(readonly authService: AuthService) {}

  ngOnInit() {
    this.username$ = this.authService.state$.pipe(map(s => s.username));
  }

  logout() {
    this.authService.logout();
  }
}
