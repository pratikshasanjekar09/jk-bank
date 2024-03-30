import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public isCollapsed = true;
   title ="Jankalyan"

   slides: string[] = [
    'url1.jpg',   // Replace with actual image URLs
    'url2.jpg',   // Replace with actual image URLs
    'url3.jpg'    // Replace with actual image URLs
  ];
}
