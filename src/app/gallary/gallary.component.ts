import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  // Define an array of gallery images with URLs and descriptions
  galleryImages = [
    { url: 'assets/bankpic1.JPG', description: 'Image 1 Description' },
    { url: 'assets/bankpic2.jpg', description: 'Image 2 Description' },
    { url: 'assets/umesh.jpg', description: 'Image 3 Description' },
    { url: 'assets/bankpic4.jpg', description: 'Image 1 Description' },
    { url: 'assets/bankpic7.jpg', description: 'Image 3 Description' },
    { url: 'assets/bankpic1.JPG', description: 'Image 2 Description' },
    // Add more images as needed
  ];
}
