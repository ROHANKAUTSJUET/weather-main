import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherUnit } from './../../models/weather.enum';
import { IWeather } from './../../models/weather.interface';

@Component({
  selector: 'app-weather-preview',
  templateUrl: './weather-preview.component.html',
  styleUrls: ['./weather-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherPreviewComponent {
  @Input() weather!: IWeather;
  @Input() unit!: WeatherUnit;

  get weatherUnit() {
    return this.unit === WeatherUnit.Imperial ? 'F' : 'C';
  }
}
