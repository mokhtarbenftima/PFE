import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  identifiant = ''; // Model for identifiant input
  password = ''; // Model for password input

  onConnexion() {
    // Logic for when the user submits the form
    console.log(this.identifiant, this.password);
  }
}
