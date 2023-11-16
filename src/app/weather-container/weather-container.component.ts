import { Component, OnInit } from '@angular/core';
import { catchError, map, tap, Observable, of } from 'rxjs';
import { WeatherUnit } from '../models/weather.enum';
import { IWeather } from '../models/weather.interface';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent implements OnInit {
  weather$!: Observable<IWeather>;
  city!: string;
  unit: WeatherUnit = WeatherUnit.Metric;
  errorMsg!: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }
//hello
  getWeather() {
    this.weather$ = this.weatherService.getWeather(this.city, this.unit).pipe(
      tap((res) => {
        this.errorMsg = null as any;
        return of(res);
      }),
      catchError((error) => {
        this.errorMsg = error.message;
        return of(null as any);
      })
    );
  }

  changeCity(value: string) {
    this.city = value;
    this.getWeather();
  }

  changeUnit(value: WeatherUnit) {
    this.unit = value;
    this.getWeather();
  }
}
