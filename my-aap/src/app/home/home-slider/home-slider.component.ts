import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  images = [
    {'slideimg': 'src/assets/img/slider1.jpg', 'maintitle': 'vikas', 'title': 'a'}, 
    {'slideimg': 'src/assets/img/slider2.jpg', 'maintitle': 'kumar', 'title': 'b'}, 
    {'slideimg': 'src/assets/img/slider3.jpg', 'maintitle': 'jain', 'title': 'c'} 
]
  constructor() { 
    
    
  }

  ngOnInit() {
    
  }
  

}
