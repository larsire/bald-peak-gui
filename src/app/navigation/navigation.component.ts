import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  showMenu = false;

  constructor() {
  }

  ngOnInit() {
  }


  toggleMenu() {
      const menu = document.getElementById('menu');
      if (menu) {
          if (!this.showMenu) {
              menu.classList.add('menu-visible');
          } else {
              menu.classList.remove('menu-visible');
          }
          this.showMenu = !this.showMenu;
      }
  }

  showSimulation() {
      console.log('SIMULATION');
      const main = document.querySelector('#main-content');
      const link = document.getElementById('simulation');

      if (main && link) {
          main.appendChild(link);
      } else {
          console.error('error');
      }
  }
}
