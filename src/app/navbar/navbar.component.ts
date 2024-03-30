import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed = true; // Initially collapsed for mobile view

  // Add navigation links as needed
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    const navbarToggle = this.el.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.el.nativeElement.querySelector('.navbar-collapse');

    this.renderer.listen(navbarToggle, 'click', () => {
      if (navbarCollapse.classList.contains('show')) {
        this.renderer.removeClass(navbarCollapse, 'show');
      } else {
        this.renderer.addClass(navbarCollapse, 'show');
      }
    });
  }
}
