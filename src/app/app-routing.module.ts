import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';

const routes: Routes = [
  { path: 'weather', component: WeatherContainerComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
