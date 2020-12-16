import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core' ;

import { blog} from '../products';



@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit {

    myself = blog.image;
  @Input() image;
  

  constructor(
   
  ) { }

  ngOnInit() {
   
  }



}