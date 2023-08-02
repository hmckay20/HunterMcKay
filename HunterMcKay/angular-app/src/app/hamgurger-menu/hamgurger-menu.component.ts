import { Component } from '@angular/core';

@Component({
  selector: 'app-hamgurger-menu',
  templateUrl: './hamgurger-menu.component.html',
  styleUrls: ['./hamgurger-menu.component.scss']
})
export class HamgurgerMenuComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(){
    this.isMenuOpen = false;
  }
}
