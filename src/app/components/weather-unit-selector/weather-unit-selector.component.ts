import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherUnit } from './../../models/weather.enum';

@Component({
  selector: 'app-weather-unit-selector',
  templateUrl: './weather-unit-selector.component.html',
  styleUrls: ['./weather-unit-selector.component.scss'],
})
export class WeatherUnitSelectorComponent{
  @Input() selectedUnit!: WeatherUnit;
  @Output() onChange = new EventEmitter<WeatherUnit>();

  WeatherUnit = WeatherUnit;
}