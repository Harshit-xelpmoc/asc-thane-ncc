import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  scrollY: number;

  constructor() {}

  ngOnInit() {}
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }


    document.onreadystatechange = ()=> {
      let lastScrollPosition = 0;
      const navbar = document.querySelector('.navheader');
      window.addEventListener('scroll', function(e) {
        lastScrollPosition = window.scrollY;

        if (lastScrollPosition > 100)
          navbar.classList.add('.bg-dark');
        else
          navbar.classList.remove('.bg-white');
      });
    }
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
  createPoppper() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
}
