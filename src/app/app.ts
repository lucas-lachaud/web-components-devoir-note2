import { Component } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { StatsPanel } from './stats-panel/stats-panel';
import { PresenterPanel } from './presenter-panel/presenter-panel';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  imports: [UserCard, StatsPanel, PresenterPanel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  selectedPresenter: User | null = null;

  users: User[] = [
    { prenom: 'Lucas', nom: 'Lachaud', age: 19, os: 'MacOS', present: false },
    { prenom: 'Theo', nom: 'Legrand', age: 34, os: 'Windows', present: false },
    { prenom: 'Yael', nom: 'Avelot', age: 22, os: 'Linux', present: false },
    { prenom: 'Thierry', nom: 'Guo', age: 20, os: 'Windows', present: false },
    { prenom: 'Eva', nom: 'Bernard', age: 19, os: 'MacOS', present: false },
    { prenom: 'Manon', nom: 'Legrand', age: 30, os: 'Windows', present: false },
    { prenom: 'Lea', nom: 'Legrand', age: 28, os: 'Windows', present: false },
    { prenom: 'Thomas', nom: 'Legrand', age: 25, os: 'Windows', present: false },
    { prenom: 'Charles', nom: 'Dupont', age: 20, os: 'Windows', present: false },
    { prenom: 'Manon', nom: 'Bernard', age: 18, os: 'MacOS', present: false },
    { prenom: 'Eva', nom: 'Legrand', age: 34, os: 'Windows', present: false },
  ];

  togglePresence(event: { prenom: string; nom: string; present: boolean }) {
    const user = this.users.find(u => u.prenom === event.prenom && u.nom === event.nom);
    if (user) {
      user.present = event.present;
      this.users = [...this.users];
    }
  }

  onPresenterChanged(user: User | null) {
    this.selectedPresenter = user;
  }
}
