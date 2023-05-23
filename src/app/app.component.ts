import { Component } from '@angular/core';
import { AppApiService } from './services/app-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cryptoViewer';

  data: any = []; // list of all coins
  dataFavorites: any = []; // list of the your favorite coins up to 3

  constructor( private AppApiService: AppApiService ) {

  }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.AppApiService.getMarketData().then(data => {
      this.data = data.Data;
      console.warn("data",this.data);
    });
  }

  public addToFavorites(coin: any) {
    // max 3
    if (this.dataFavorites.length >= 3) {
      // remove last item
      this.dataFavorites.splice(2, 1);
    }
    this.dataFavorites.push(coin);
  }
  public removeFromFavorites(coin: any) {
    this.dataFavorites.splice(this.dataFavorites.indexOf(coin), 1);
  }
}
