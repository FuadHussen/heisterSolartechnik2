import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems?.classList.toggle('show');
  }

  closeMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems?.classList.remove('show');
  }
}