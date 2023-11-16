import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WeatherPreviewComponent } from './components/weather-preview/weather-preview.component';
import { WeatherFormComponent } from './components/weather-form/weather-form.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { MatRadioModule } from '@angular/material/radio';
import { WeatherUnitSelectorComponent } from './components/weather-unit-selector/weather-unit-selector.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent,
    PageNotFoundComponent,
    WeatherPreviewComponent,
    WeatherFormComponent,
    WeatherUnitSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
