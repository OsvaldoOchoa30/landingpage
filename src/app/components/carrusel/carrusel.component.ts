import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss',
})
export class CarruselComponent {

    products: any[];
  
    constructor() {
      this.products = [
        { image: "https://img.asmedia.epimg.net/resizer/v2/DQ44WPCEJZJJPACJFENL7UPORM.jpg?auth=5c23429dde6278efeae790d3b0aca9a1567d40e0d1ecd2cb4cb214dcf1a096f9&width=1472&height=1104&smart=true"},
        { image: 'https://piratasdelbasket.net/storage/2023/09/USATSI_17414021-scaled.webp' },
        { image: 'https://cdn.nba.com/teams/uploads/sites/1610612741/2024/04/240404_OnuralpBitim_16x9.jpg' },
      ];
    }
  

}
