import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { WeatherUnit } from '../models/weather.enum';
import { IWeather } from '../models/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string, unit: WeatherUnit): Observable<IWeather> {
    const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9da17b7bc782bc0a13cb8d4e8ce3566&units=${unit}`;

    return this.http.get(uri).pipe(
      map((response: any) => {
        return {
          temperature: response.main.temp,
          feelsLikeTemp: response.main.feels_like,
          humidity: response.main.humidity,
          pressure: response.main.pressure,
          summary: response.weather[0].main,
          iconUrl: `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
        };
      }),
      catchError((error: HttpErrorResponse) => {
        const errorMsg = this.getErrorMessage(error);
        const err = new Error(errorMsg);
        return throwError(() => err);
      })
    );
  }

  getErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not weather data found`;
      }
      case 403: {
        return `Access Denied: Sorry`;
      }
      case 401: {
        return `Unauthorized request`;
      }
      case 500: {
        return `Internal Server Error: Please try again sometime`;
      }
      default: {
        return `Please enter the valid city name`;
      }
    }
  }
}
