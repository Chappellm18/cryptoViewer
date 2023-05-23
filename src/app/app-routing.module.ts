import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { SettingsComponent } from './components/settings/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/'},
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
