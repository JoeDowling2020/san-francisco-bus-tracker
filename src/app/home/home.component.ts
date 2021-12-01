import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   
  <section class="hero is-large is-info">
  <div class="hero-body">
    <div class="container is-max-desktop">
    <div class="notification is-primary">
      
    </div>
</div>
  </div>
</section>

<section class="hero is-large is-info">
  <div class="hero-body">
    <div class="container is-max-desktop">
    <div class="notification is-primary">
      
    </div>
</div>
  </div>
</section>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
