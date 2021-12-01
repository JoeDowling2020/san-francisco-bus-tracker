import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar is-success">

  <div class="navbar-brand">
    <a class="navbar-item"><img src="assets/img/bus.jpg"></a>
  </div>


  <a class="navbar-item">
  San Francisco Bus Tracker
  </a>



  </div>

  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
