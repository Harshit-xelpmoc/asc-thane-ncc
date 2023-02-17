import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styles: [
  ]
})
export class HeaderNewComponent implements OnInit {
  button:any;
  menu:any;
  navbarOpen = false;
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  scrollY: number;

  constructor() { }

  ngOnInit(): void {
    this.button = document.querySelector('#menu-button');
    this.menu = document.querySelector('#menu');


    this.button.addEventListener('click', () => {
      this.menu.classList.toggle('hidden');
    });
  }



  // ngOnInit() {}
  // toggleDropdown(event) {
  //   event.preventDefault();
  //   if (this.dropdownPopoverShow) {
  //     this.dropdownPopoverShow = false;
  //   } else {
  //     this.dropdownPopoverShow = true;
  //     this.createPoppper();
  //   }


  //   document.onreadystatechange = ()=> {
  //     let lastScrollPosition = 0;
  //     const navbar = document.querySelector('.navheader');
  //     window.addEventListener('scroll', function(e) {
  //       lastScrollPosition = window.scrollY;

  //       if (lastScrollPosition > 100)
  //         navbar.classList.add('.bg-dark');
  //       else
  //         navbar.classList.remove('.bg-white');
  //     });
  //   }
  // }

  // setNavbarOpen() {
  //   this.navbarOpen = !this.navbarOpen;
  // }
  // createPoppper() {
  //   createPopper(
  //     this.btnDropdownRef.nativeElement,
  //     this.popoverDropdownRef.nativeElement,
  //     {
  //       placement: "bottom-start",
  //     }
  //   );
  // }
}
