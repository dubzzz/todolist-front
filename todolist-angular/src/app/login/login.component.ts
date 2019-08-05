import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  redirect?: string;

  username: string = "";
  password: string = "";
  hide: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription.add(
      this.route.queryParams.subscribe(
        params => (this.redirect = params["redirect"])
      )
    );
  }

  canLogin() {
    return this.username.length > 0 && this.password.length > 0;
  }

  login() {
    if (!this.canLogin()) return;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
