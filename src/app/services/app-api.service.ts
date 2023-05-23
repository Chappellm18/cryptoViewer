
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // or specify a specific module if necessary
})
export class AppApiService {
    // need to create basic api calls to be used in the calls
    
    apiKey:string = 'fc9fc2f36d15dd0402893796daf20f1b160e560cf3ade9246c8866af2dca2b3c';
    // get
    public get(url: string) {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    // getArray


    // post



    // 
    public getMarketData() {
        return this.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=' + this.apiKey); 
    }
}