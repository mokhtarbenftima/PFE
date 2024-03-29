import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userIdentification = 'User123'; // Replace with actual user identification

  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
