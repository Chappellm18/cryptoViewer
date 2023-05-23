import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppApiService } from './services/app-api.service';
import { CoinCardComponent } from './components/coin-card/coin-card.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { SettingsComponent } from './components/settings/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinCardComponent,
    ProfileComponent,
    NavigationComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [AppApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
