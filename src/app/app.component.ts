import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Etat des affectations
  affectations = [
    { id: 1, name: 'Affetation 1' },
    { id: 2, name: 'Affetation 2' },
  ];

  onAffectationsUpdated(updatedAffectations) {
    this.affectations = updatedAffectations;
  }
}
