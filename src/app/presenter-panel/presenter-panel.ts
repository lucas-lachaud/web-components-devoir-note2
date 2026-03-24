import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-presenter-panel',
  templateUrl: './presenter-panel.html',
})
export class PresenterPanel {
  @Input() users: User[] = [];

  @Output() presenterChanged = new EventEmitter<User | null>();

  selectedPresenter: User | null = null;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  selectPresenter(user: User) {
    this.selectedPresenter = user;
    this.menuOpen = false;
    this.presenterChanged.emit(user);
  }

  clearPresenter() {
    this.selectedPresenter = null;
    this.presenterChanged.emit(null);
  }
}
