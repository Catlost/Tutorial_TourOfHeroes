import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables que puedo usar luego en el HTML porque sean valores constantes
  // O que luego modificaré con la app en real time
  title = 'Tour of Heroes';
}
