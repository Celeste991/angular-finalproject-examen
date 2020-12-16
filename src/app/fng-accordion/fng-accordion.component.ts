import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fng-accordion',
  templateUrl: './fng-accordion.component.html',
  styleUrls: ['./fng-accordion.component.css']
})
export class FngAccordionComponent implements OnInit {
  isFirstOpen = true;
  constructor() { }

  ngOnInit() {
  }

}