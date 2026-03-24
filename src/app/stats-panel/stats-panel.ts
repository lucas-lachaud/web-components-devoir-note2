import { Component, Input } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-stats-panel',
  templateUrl: './stats-panel.html',
  styleUrl: './stats-panel.css',
})
export class StatsPanel {
  private _users: User[] = [];

  @Input()
  set users(value: User[]) {
    this._users = value;
    this.calculateStats();
  }

  total = 0;
  presents = 0;
  absents = 0;
  nbWindows = 0;
  nbMacOS = 0;
  nbLinux = 0;
  moyenneAge = 0;
  plusAge: User | undefined;
  moinsAge: User | undefined;

  calculateStats() {
    if (!this._users || this._users.length === 0) {
      this.resetStats();
      return;
    }

    this.total = this._users.length;
    this.presents = 0;
    this.absents = 0;
    this.nbWindows = 0;
    this.nbMacOS = 0;
    this.nbLinux = 0;

    let totalAge = 0;
    this.plusAge = this._users[0];
    this.moinsAge = this._users[0];

    for (const user of this._users) {
      if (user.present) this.presents++;
      else this.absents++;

      if (user.os === 'Windows') this.nbWindows++;
      else if (user.os === 'MacOS') this.nbMacOS++;
      else if (user.os === 'Linux') this.nbLinux++;

      totalAge += user.age;
      if (user.age > this.plusAge.age) this.plusAge = user;
      if (user.age < this.moinsAge.age) this.moinsAge = user;
    }

    this.moyenneAge = Math.round(totalAge / this.total);
  }

  private resetStats() {
    this.total = 0;
    this.presents = 0;
    this.absents = 0;
    this.nbWindows = 0;
    this.nbMacOS = 0;
    this.nbLinux = 0;
    this.moyenneAge = 0;
    this.plusAge = undefined;
    this.moinsAge = undefined;
  }
}
