import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assignment-4';

  constructor(private router: Router) {}

  goAdd(): void {
    this.router.navigate(['add']);
  }
  goList(): void {
    this.router.navigate(['']);
  }
}
