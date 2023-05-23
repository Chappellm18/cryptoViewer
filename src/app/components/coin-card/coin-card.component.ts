import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss']
})
export class CoinCardComponent {


  // need to have input data
  @Input() data: any = [];

  //Output
  @Output() public addToFavorites = new EventEmitter();
  @Output() public removeFromFavorites = new EventEmitter();
  
  constructor() { 
  }


  public addCoinToFavorite(coin: any) {
    this.addToFavorites.emit(coin);
  }

  public removeCoinFromFavorite(coin: any) {
    this.removeFromFavorites.emit(coin);
  }
  

}
