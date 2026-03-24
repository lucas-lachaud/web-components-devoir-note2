import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input() prenom = '';
  @Input() nom = '';
  @Input() age = 0;
  @Input() os: 'Windows' | 'MacOS' | 'Linux' = 'Windows';
  @Input() present = false;

  // on utilise le nom et prenom car certaine personne on le meme prenom ou nom de famille
  @Output()
  presenceToggled = new EventEmitter<{ prenom: string; nom: string; present: boolean }>();

  togglePresence() {
    this.present = !this.present;
    this.presenceToggled.emit({ prenom: this.prenom, nom: this.nom, present: this.present });
  }
}
