import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styles: [
  ]
})
export class HeaderNewComponent implements OnInit {
  button:any;
  menu:any;

  constructor() { }

  ngOnInit(): void {
    this.button = document.querySelector('#menu-button');
    this.menu = document.querySelector('#menu');


    this.button.addEventListener('click', () => {
      this.menu.classList.toggle('hidden');
    });
  }




}
