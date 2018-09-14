import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-testimonial',
  templateUrl: './home-testimonial.component.html',
  styleUrls: ['./home-testimonial.component.css']
})
export class HomeTestimonialComponent implements OnInit {

  images = [
    {'slideimg': 'src/assets/img/slider1.jpg', 'maintitle': 'vikas', 'title': 'a'}, 
    {'slideimg': 'src/assets/img/slider2.jpg', 'maintitle': 'kumar', 'title': 'b'}, 
    {'slideimg': 'src/assets/img/slider3.jpg', 'maintitle': 'jain', 'title': 'c'} 
]
  
  constructor() { }

  ngOnInit() {
  }

}
