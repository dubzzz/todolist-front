import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { TryLoginByToken } from 'src/state/authentication/authentication.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(TryLoginByToken);
  }
}
