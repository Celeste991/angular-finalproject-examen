import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Lightbox } from 'ngx-lightbox';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-portfolio-lightbox',
  templateUrl: './portfolio-lightbox.component.html',
  styleUrls: ['./portfolio-lightbox.component.css']
})
export class PortfolioLightboxComponent implements OnInit {
  @Input() portfolioURL;

 _albums: any = [] ;

  constructor(
    private cartService: CartService,
    private _lightbox: Lightbox,
  ) { }

  ngOnInit() {
    this.cartService.getPortfolio(this.portfolioURL).subscribe(data =>{
      console.log(data);
      this._albums = data;
    });
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}