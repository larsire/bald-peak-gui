import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  showMenu = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  toggleMenu() {
      const menu = document.getElementById("menu");
      if (menu) {
          if (!this.showMenu) {
              menu.classList.add("menu-visible");
          } else {
              menu.classList.remove("menu-visible");
          }
          this.showMenu = !this.showMenu;
      }
  }

  goTo(pageName) {
      this.router.navigate([pageName]);
      this.toggleMenu();
  }
}
