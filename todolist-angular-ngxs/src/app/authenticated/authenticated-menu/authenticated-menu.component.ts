import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticated-menu',
  templateUrl: './authenticated-menu.component.html',
  styleUrls: ['./authenticated-menu.component.css']
})
export class AuthenticatedMenuComponent {
  @Output() toggleMenu = new EventEmitter<void>();

  constructor(readonly router: Router) {}

  goTo(pageLink: string) {
    this.toggleMenu.emit();
    this.router.navigate([pageLink]);
  }
}
