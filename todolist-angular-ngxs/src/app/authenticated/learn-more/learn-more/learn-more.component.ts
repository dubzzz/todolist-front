import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent {
  resetToken() {
    (window as any).validToken = Math.random()
      .toString(16)
      .substr(2);
  }
}
