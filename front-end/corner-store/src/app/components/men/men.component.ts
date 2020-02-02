import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    smartSpeed: 2000,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin:40,
    responsive: {
      0: {
        items: 3
      }
    },
    nav: false,
    navText: ["", ""]
  };

  slidesStore = [
    {
      id: 1,
      title: "first title image",
      src: "../../../assets/img/products/man-1.jpg",
      category: "first image",
      price: "30$",
      old_price:"40$"
    },
    {
      id: 2,
      title: "first title image",
      src: "../../../assets/img/products/man-2.jpg",
      category: "first image",
      price: "40$",
      old_price:"50$"
    },
    {
      id: 3,
      title: "first title image",
      src: "../../../assets/img/products/man-3.jpg",
      category: "first image",
      price: "10$",
      old_price:"20$"
    },
    {
      id: 4,
      title: "first title image",
      src: "../../../assets/img/products/man-4.jpg",
      category: "first image",
      price: "100$",
      old_price:"220$"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
